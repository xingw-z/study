import mgMessage from './index.js'

    const install = function(Vue) {
      Vue.component(mgMessage.name, mgMessage)

      Vue.prototype.$mg_message = mgMessage.installMessage
    }
    export default install