import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import classification from '@/components/classification'
import shoppingCar from '@/components/shoppingCar'
import myself from '@/components/myself'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself
    }
  ]
})
