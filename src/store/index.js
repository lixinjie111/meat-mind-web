import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: 0 //用户角色 0-分析师  1-企业主  2-数据管理员
  },
  mutations: {
    setRole(state, value) {
      state.role = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
