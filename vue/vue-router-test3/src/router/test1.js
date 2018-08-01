import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld')
    },
    {
      path: '/NameRouter',
      name: 'NameRouter',
      component: () => import('../components/NameRouter')
    }
  ]
})