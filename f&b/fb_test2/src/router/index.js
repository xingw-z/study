import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: () => import('../components/Sign/Signin')
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: () => import('../components/Sign/Signup')
    }
  ]
})