import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    rooms: {}
  },
  mutations,
  actions,
  getters: {
    roomList (state) {
      return state.rooms
    },
    messageList: (state) => (room) => {
      return state.rooms[room]?.messages || []
    }
  }
}
