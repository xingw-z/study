


(function (global) {

})(window)

class MyVue {
    constructor(options) {
        this.options = options
        this.initData(options)
        let el = this.options.id
        this.$mount(el)
    }
    initData(options) {
        if (!options.data) return
        this.data = options.data
        new Observer(options.data)
    }
    $mount(el) {
        const updateView = _ => {
            let innerHtml = document.querySelector(el).innerHTML
            console.log(innerHtml.match(/{(\w+)}/), innerHtml)
            let key = innerHtml.match(/{(\w+)}/)[1]
            document.querySelector(el).innerHTML = this.options.data[key]
        }
        new Watcher(updateView, true)
    }
}


class Observer {
    constructor(data) {
        this.walk(data)
    }
    walk(obj) {
        const keys = Object.keys(obj)
        for (let i = 0, len = keys.length; i < len; i++) {
            defineReactive(obj, keys[i])
        }
    }
}

class Watcher {
    constructor(expOrFn, isRenderWatcher) {
        this.getter = expOrFn
        this.get()
    }
    get() {
        Dep.target = this
        this.getter()
        Dep.target = null
    }
    update() {
        this.get()
    }
}

let uid = 0

class Dep {
    constructor() {
        this.id = uid++
        this.subs = []
    }
    depend() {
        if (Dep.target) {
            this.subs.push(Dep.target)
        }
    }
    notify() {
        const subs = this.subs.slice()
        for (let i = 0, len = subs.length; i < len; i++) {
            subs[i].update()
        }
    }
}

Dep.target = null

const defineReactive = (obj, key) => {
    const dep = new Dep()
    const property = Object.getOwnPropertyDescriptor(obj)
    let val = obj[key]
    if (property && property.configurable === false) return
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
            if (Dep.target) {
                dep.depend()
            }
            return val
        },
        set(nval) {
            if (nval === val) return
            val = nval
            dep.notify()
        }
    })
}

var vm = new MyVue({
    id: '#app',
    data: {
        test: 12
    }
})
