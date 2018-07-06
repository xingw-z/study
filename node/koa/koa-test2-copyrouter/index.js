const methods = ['GET', 'POST', 'PUT', 'DELETE']
class Router {
  constructor() {
    this.routesMap = new Map()
    const rm = this.routesMap

    methods.map((method) => {
      rm.set(method, new Map())
    })
  }

  register(method, pattern, handler) {
    let routes = this.routesMap.get(method)
    if (!routes) {
      throw new Error('该HTTP方法不受支持！')
    }
    routes.set(pattern, handler)
  }

  matchHandler(method, url, ctx) {
    let routes = this.routesMap.get(method)

    if (!routes) {
      return null
    }

    for (let [key, value] of routes) {
      let matchs
      if (matchs = key.exec(url)) {
        ctx.params = matchs.slice(1)
        return value
      }
    }
    return null
  }

  middleware() {
    const self = this
    return async (ctx, next) => {
      const method = ctx.request.method
      const url = ctx.request.url
      const handler
    }
  }
}

methods.map((method) => {
  Router.prototype[method.toLowerCase()] = function(pattern, handler) {
    this.register(method, pattern, handler)
  }
})