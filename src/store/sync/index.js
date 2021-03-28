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

    createSocketConnection ({ state, commit, dispatch }) {
      if (state.socket) {
        return
      }

      this.dispatch('ui/setLoader', { loader: 'socket', active: true })

      const userName = localStorage.getItem('userName')
      const socket = new WebSocket(config.ws.baseUrl.replace('{username}', userName))
      commit('setSocket', socket)

      dispatch('handleSocketConnection')
      dispatch('handleSocketMessage')
    },

    handleSocketConnection ({ state }) {
      state.socket.onopen = () => {
        this.dispatch('ui/setLoader', { loader: 'socket', active: false })
      }
    },

    handleSocketMessage ({ state, rootState }) {
      state.socket.onmessage = ({ data }) => {
        data = JSON.parse(data)
        const rooms = rootState.chat.rooms
        if (rooms[data.room]) {
          this.dispatch('chat/updateLastMessage', { room: data.room, message: data })
          this.dispatch('chat/updateMessageList', { room: data.room, messages: data })
        }
      }
    },

    sendSocketData ({ state }, data) {
      if (!state.socket) return
      state.socket.send(JSON.stringify(data))
    }
  }
}
