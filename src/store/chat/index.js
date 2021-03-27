import config from '@/config/default'

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    getRooms () {
      return this.dispatch('sync/execute', {
        url: config.api.baseUrl + '/rooms',
        loader: 'roomList'
      })
    }
  }
}
