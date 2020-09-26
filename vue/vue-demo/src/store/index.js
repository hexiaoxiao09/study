import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'lisi'
  },
  // getters:{
  //   name(state) {
  //     return `姓名${state.name}`
  //   }
  // },
  mutations: {
    SET_NAME(state) {
      state.name = 'zhangsan'
    }
  },
  actions: {
  },
  modules: {
  }
})
