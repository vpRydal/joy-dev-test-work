import Vue from 'vue'
import Vuex from 'vuex'
import ATC from './modules/ATC'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    init() {
    }
  },
  actions: {
    init(context) {
      context.commit('ATC/init')
    }
  },
  modules: {
    ATC
  }
})
