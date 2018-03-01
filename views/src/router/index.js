import Vue from 'vue'
import Router from 'vue-router'
import dell from '@/components/del'
import api from '@/components/api'
import index from '@/components/api/index'
import classification from '@/components/api/classification'
import shoppingCar from '@/components/api/shoppingCar'
import myself from '@/components/api/myself'

import backindex from '@/components/back/backindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dell',
      component: dell,
    },
    {
      path: '/api',
      name: 'api',
      component: api,
      children:[
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path: 'classification',
          name: 'classification',
          component: classification
        },
        {
          path: 'shoppingCar',
          name: 'shoppingCar',
          component: shoppingCar
        },
        {
          path: 'myself',
          name: 'myself',
          component: myself
        }
      ]
    },
    {
      path: '/backindex',
      name: 'backindex',
      component: backindex,
      children:[

      ]
    }
  ],
  mode:'hash'
})
