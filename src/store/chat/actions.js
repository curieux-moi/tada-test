import config from '@/config/default'

export default {
  async setRoomList ({ commit }) {
    const { result: rooms } = await this.dispatch('sync/execute', {
      url: config.api.baseUrl + '/rooms',
      loader: 'roomList'
    })

    commit('updateRoomList', rooms || [])
  },
  createRoom ({ commit }, roomName) {
    const userName = localStorage.getItem('userName')
    const message = {
      created: new Date().toISOString(),
      room: roomName,
      sender: { username: 'System' },
      text: `${userName} создал комнату`
    }

    commit('setMessageList', {
      room: roomName,
      messages: [message]
    })
    commit('updateLastMessage', { room: roomName, message })
  },
  async getRoomHistory ({ dispatch }, roomName) {
    const { result: messages } = await this.dispatch('sync/execute', {
      url: config.api.baseUrl + `/rooms/${roomName}/history`,
      loader: 'roomList'
    })

    dispatch('setMessageList', {
      room: roomName,
      // freeze messages for better performace making them reactiveless
      messages: Object.freeze(messages || [])
    })
  },
  setMessageList ({ commit }, data) {
    commit('setMessageList', data)
  },
  updateMessageList ({ commit }, data) {
    commit('updateMessageList', data)
  },
  updateLastMessage ({ commit }, data) {
    commit('updateLastMessage', data)
  }
}
