export default {
  namespaced: true,
  state: {
  },
  mutations: {
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
    }
  },
  modules: {
  }
}
