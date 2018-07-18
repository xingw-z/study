import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: (resolve) => {
        require.ensure([], () => resolve(require('@/App.vue')))
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: (resolve) => {
        require.ensure([], () => resolve(require('@/components/HelloWorld.vue')))
      }
    },
    {
      path: '/Asd',
      name: 'Asd',
      component: (resolve) => {
        require.ensure([], () => resolve(require('@/components/Asd.vue')))
      }
    }
  ]
})