import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/homePage1',
      children: [
        {path: '/homePage1', component: () => import('./views/HomePage1.vue'), meta: {title: '11111'}},
        {path: '/homePage2', component: () => import('./views/HomePage2.vue'), meta: {title: '22222'}},
        {path: '/homePage3', component: () => import('./views/HomePage3.vue'), meta: {title: '33333'}},

			],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
