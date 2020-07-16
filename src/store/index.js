import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedShow: {}
  },
  mutations: {
    'Selected_Show'(state,payload){
      state.selectedShow = payload;
    }
  },
  actions: {
    changeSelectedShow({commit},payload){
      commit('Selected_Show',payload);
    }
  },
  getters:{
    selectedShow: (state) => (state.selectedShow)    
  }
})
