import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/pages/about/about.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/about',
      name: 'About',
      component: about
    }]
  })
}