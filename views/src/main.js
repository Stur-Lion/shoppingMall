// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/base.css'
import './assets/icon/iconfont.css'
import router from './router'
import axios from '../node_modules/axios'
import 'jquery'
import store from '@/vuex/store'

Vue.config.productionTip = false
Vue.prototype.axios = axios

console.log(store);

/*重定向路由*/
router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {
    next('/api/index')
  } else {
    if(to.fullPath == '/backSign'){
      if(store.state.session==''){
        next();
      }else{
        next('/backindex')
      }
    }
    if(store.state.session==''){
      if(to.fullPath.indexOf('/api')==0){
        next();
      }else{
        next('/backSign')
      }
    }else{
      next();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
