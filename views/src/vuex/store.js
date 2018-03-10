/* 状态管理 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  session:'1'
}

const mutations = {
  changeSession(session){
    if(session){
      state.session = session
    }else {
      state.session = ''
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
