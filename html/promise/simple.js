class MyPromise {
  static resolve(value) {
    if (value && value.then) {
      return value
    }
    return new MyPromise((resolve) => resolve(value))
  }

  constructor(cb) {
    this.value = null
    this.reason = null
    this.status = PENDING

    this.fulFilledCallbacks = []
    this.rejectedCallbacks = []

    const resolve = (value) => {
      setTimeout(() => {
        this.status = FULFILLED
        this.value = value
        this.fulFilledCallbacks.forEach(({ fn, resolve: res, reject: rej }) => {
          res(fn(value))
        })
      }, 0);
    }

    const reject = (reason) => {
      setTimeout(() => {
        this.reason = REJECTED
        this.reason = reason
        this.rejectedCallbacks.forEach(({ fn, resolve: res, reject: rej }) => {
          rej(fn(reason))
        })
      }, 0);
    }

    cb(resolve, reject)
  }

  then(fulfilledCb, rejectedCb) {
    if (this.status === FULFILLED) {
      const result = fulfilledCb(this.value)
      return MyPromise.resolve(result)
    } else if (this.status === PENDING) {
      return new MyPromise((resolve, reject) => {
        if (fulfilledCb) {
          this.fulFilledCallbacks.push({fn: fulfilledCb, resolve, reject})
        }
        if (rejectedCb) {
          this.rejectedCallbacks.push({fn: rejectedCb, resolve, reject})
        }
      })
    }
  }

  catch(fn) {
    if (this.status === REJECTED) {
      const result = fn(this.value)
      return MyPromise.resolve(result)
    }
    if (this.status === PENDING) {
      return new MyPromise((resolve, reject) => {
        this.rejectedCallbacks.push({fn, resolve, reject})
      })
    }
  }
}

MyPromise.resolve(10)
  .then((o) => {
    return o * 10
  })
  .then((o) => {
    return o + 10
  })
  .then((o) => {
    console.log(o);
  });

var a = new MyPromise((resolve, reject) => {
  reject("Error")
  // resolve('对的')
}).then((res) => {
  console.log(res, 'then');
}, (e) => {
  console.log("Error", e);
}).catch((e) => {
  console.log(e, '2e');
})
