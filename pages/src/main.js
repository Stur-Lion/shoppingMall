// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/base.css'
import './assets/icon/iconfont.css'
import router from './router'
import 'lib-flexible'
import axios from '../node_modules/axios'
import 'jquery'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
