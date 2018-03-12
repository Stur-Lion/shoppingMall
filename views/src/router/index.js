import Vue from 'vue'
import Router from 'vue-router'
import api from '@/components/api'

/*移动端*/
import index from '@/components/api/index'
import classification from '@/components/api/classification'
import shoppingCar from '@/components/api/shoppingCar'
import myself from '@/components/api/myself'

/*后台管理*/
import backSign from '@/components/back/backSign'

import backindex from '@/components/back/backindex'
import backUser from '@/components/back/backUser'
import user from '@/components/back/user'
import banner from '@/components/back/indexManage/banner'

Vue.use(Router)

export default new Router({
  routes: [
    /*移动端*/
    {
      name: 'api',
      path: '/api',
      component: api,
      children:[
        {
          path: 'index',
          name: 'index',
          component: index
        }, {
          path: 'classification',
          name: 'classification',
          component: classification
        }, {
          path: 'shoppingCar',
          name: 'shoppingCar',
          component: shoppingCar
        }, {
          path: 'myself',
          name: 'myself',
          component: myself
        }
      ]
    },
    /*后台管理*/
    {
      path:'/backSign',
      name: 'backSign',
      component: backSign,
    },
    {
      path: '/backindex',
      name: 'backindex',
      component: backindex,
      children:[
        {
          name: 'backUser',
          path: 'backUser',
          component: backUser,
        }, {
          name: 'user',
          path: 'user',
          component: user,
        }, {
          path: 'banner',
          name: 'banner',
          component: banner
        }
      ]
    }
  ],
  mode:'hash'
})
