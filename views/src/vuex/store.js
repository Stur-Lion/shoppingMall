/* 状态管理 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  session:''
}

const mutations = {
  changeSession(session){
    console.log(1);
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
