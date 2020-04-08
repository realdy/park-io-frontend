import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Help from '@/components/Help'
import SpotAdding from '@/components/SpotAdding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/add',
      name: 'SpotAdding',
      component: SpotAdding
    }
  ]
})
