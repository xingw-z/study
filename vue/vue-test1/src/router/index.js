import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve) => {
        require.ensure([], () => resolve(require('@/components/HelloWorld.vue')))
      }
    },
    {
      path: '/Myslot',
      name: 'Myslot',
      component: (resolve) => {
        require.ensure([], () => resolve(require('@/components/Myslot.vue')))
      },
    }
  ]
})
