import Vue from 'vue'
import Vuex from 'vuex'
import chat from './chat/index'
import sync from './sync/index'
import ui from './ui/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    chat,
    sync,
    ui
  }
})
