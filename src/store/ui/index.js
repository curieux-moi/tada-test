import config from '@/config/default'

export default {
  namespaced: true,
  state: {
    notifications: {
      error: {
        active: false,
        message: ''
      }
    },
    loaders: {
      roomList: false
    }
  },
  mutations: {
    setNotification (state, { type, active, message }) {
      state.notifications[type] = { active, message }
    },
    setLoader (state, { loader, active }) {
      state[loader] = active
    }
  },
  actions: {
    setNotification ({ state, commit }, { type, message }) {
      if (!state.notifications[type]) {
        return
      }
      commit('setNotification', { type, message, active: true })
      setTimeout(() => {
        commit('setNotification', { type, message: '', active: false })
      }, config.ui.notificationDuration)
    },
    setLoader ({ commit }, loader) {
      commit('setLoader', loader)
    }
  }
}
