import config from '@/config/default'

export default {
  namespaced: true,
  state: {
    socket: null
  },
  mutations: {
    setSocket (state, socket) {
      state.socket = socket
    }
  },
  actions: {
    async execute (_, { url, options, silent = false, loader }) {
      try {
        if (!silent) {
          this.dispatch('ui/setLoader', { loader, active: true })
        }
        const response = await fetch(url, options)
        const jsonResponse = await response.json()

        return {
          result: jsonResponse.result,
          code: jsonResponse.code
        }
      } catch (e) {
        this.dispatch('ui/setNotification', { type: 'error', message: e.toString() })
        return { result: null, code: 500 }
      } finally {
        this.dispatch('ui/setLoader', { loader, active: false })
      }
    },
    createSocketConnection ({ state, commit }) {
      if (state.socket) {
        return
      }
      const userName = localStorage.getItem('userName')
      const socket = new WebSocket(config.ws.baseUrl.replace('{username}', userName))

      // socket.onmessage = (event) => {
      //   console.log(event.data)
      // }

      commit('setSocket', socket)
    }
  },
  modules: {
  }
}
