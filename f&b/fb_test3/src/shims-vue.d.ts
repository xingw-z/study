import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    axios: any,
    $router: VueRouter,
    $alert: any,
    $message: any
  }
}
