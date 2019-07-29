import Toast from './index.vue'


export default {
    install: function (Vue, options = {}) {
        const VueToast = Vue.extend(Toast)
        let toast = null

        Vue.prototype.$toast = (content, time) => new Promise(resolve => {
            if (!toast) {
                toast = new VueToast()
                toast.$mount()
                document.querySelector(options.container || 'body').appendChild(toast.$el)
            }
            toast.show(content, time)
            resolve()
        })
    }
}