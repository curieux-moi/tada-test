import config from '@/config/default'

export default {
  namespaced: true,
  state: {
    socket: null
  },
  mutations: {
  },
  actions: {
    getRooms () {
      return this.dispatch('sync/execute', {
        url: config.api.baseUrl + '/rooms',
        loader: 'roomList'
      })
    },
    createRoom (context, roomName) {

    },
    getRoomHistory (_, roomName) {
      return this.dispatch('sync/execute', {
        url: config.api.baseUrl + `/rooms/${roomName}/history`,
        loader: 'roomList'
      })
    }
  }
}
