import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Child from '@/components/Child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/child',
      component: Child
    }
  ]
})
