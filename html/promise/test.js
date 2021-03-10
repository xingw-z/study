const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

function MyPromise(func) {
    const that = this
    that.status = PENDING
    that.onFulfilled = []
    that.onRejected = []

    function resolve(value) {
        if (that.status === PENDING) {
            that.status = FULFILLED
            that.value = value
            that.onFulfilled.forEach(fn => fn())
        }
    }

    function reject(reason) {
        if (that.status === PENDING) {
            that.status = REJECTED
            that.reason = reason
            that.onRejected.forEach(fn => fn())
        }
    }

    try {
        func(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    const that = this

    let promise2 = new MyPromise((resolve, reject) => {
        if (that.status === FULFILLED) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(that.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        } else if (that.status === REJECTED) {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        } else if (that.status === PENDING) {
            that.onFulfilled.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(that.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
            that.onRejected.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(that.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        }
    })
    return promise2
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        reject(new TypeError('chaining cycle'))
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (used) return
                    used = true
                    resolvePromise(promise2, y, resolve, reject)
                }, e => {
                    if (used) return
                    used = true
                    reject(e)
                })
            } else {
                if (used) return
                used = true
                resolve(x)
            }
        } catch (e) {
            if (used) return
            used = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}



MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}


MyPromise.defer = MyPromise.deferred = function () {
    let dfd = {};
    dfd.promise = new MyPromise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}

module.exports = MyPromise;