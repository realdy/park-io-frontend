import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SpotList from '@/components/SpotList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SpotList',
      component: SpotList
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
