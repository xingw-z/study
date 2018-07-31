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
      path: '/Nanshou',
      name: 'Nanshou',
      component: () => import('../components/Nanshou')
    }
  ]
})