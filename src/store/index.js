import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
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
