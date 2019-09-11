import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        // @ts-ignore
        return import( /* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/archive',
      name: 'archive',
      component: function () {
        // @ts-ignore
        return import('./views/Archive.vue')
      }
    }
  ]
})