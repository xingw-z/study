var Toast = {}
Toast.install = function (Vue, options) {
    Vue.prototype.$msg = 'helloword'
}

module.exports = Toast