import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import text from '@/components/text'
import admin from '@/components/admin'
import one from '@/components/one'
import two from '@/components/two'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/text',
      name: 'text',
      component: text,
      children: [
        {
          path: 'admin',
          name: 'admin',
          component: admin
        }
      ]
    },
    {
      path: '/duoge',
      components: {
        default: one,
        left: one,
        right: two
      }
    }
  ]
})
