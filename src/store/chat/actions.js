import config from '@/config/default'

export default {
  async setRoomList ({ commit }) {
    const { result: rooms } = await this.dispatch('sync/execute', {
      url: config.api.baseUrl + '/rooms',
      loader: 'roomList'
    })

    commit('updateRoomList', rooms || [])
  },

  async createRoom ({ dispatch }, roomName) {
    await dispatch('sendMessage', {
      room: roomName,
      text: 'Я создал комнату!'
    })
    await dispatch('setRoomList')
  },

  async getRoomHistory ({ dispatch }, roomName) {
    const { result: messages } = await this.dispatch('sync/execute', {
      url: config.api.baseUrl + `/rooms/${roomName}/history`,
      loader: 'messageList'
    })

    dispatch('setMessageList', {
      room: roomName,
      // freeze messages for better performace making them reactiveless
      messages: Object.freeze(messages || [])
    })
  },

  clearRoomHistory ({ dispatch }, roomName) {
    dispatch('setMessageList', {
      room: roomName,
      messages: []
    })
  },

  sendMessage (_, { text, room }) {
    const id = localStorage.getItem('userId')
    this.dispatch('sync/sendSocketData', { text, room, id })
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
