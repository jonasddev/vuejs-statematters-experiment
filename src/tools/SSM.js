class SSM {
  constructor(options = {}) {
    this.subscriptions = []
    this.plugins = options.plugins || []
    this.modules = options.modules || {}
    this.state = {}
    for (let moduleName in this.modules) {
      this.initModule(moduleName)
    }
    this.plugins.forEach(install => install(this))
  }

  initModule(moduleName) {
    let module = this.modules[moduleName]
    this.state[moduleName] = module.state
    for (let mutationName in module.mutations) {
      let fn = module.mutations[mutationName]
      if (fn instanceof Function) {
        module.mutations[mutationName] = this.mutationEnhancer(module, moduleName, mutationName, fn)
      }
    }
  }

  mutationEnhancer(module, moduleName, mutationName, fn) {
    let me = this
    return (...args) => {
      console.log(`${moduleName}->${mutationName}(${args}) prestate=${module.state}`)
      let ret = fn.apply(module, args)
      this.subscriptions.forEach(callback => {
        callback(moduleName, mutationName, args, me.state)
      })
      return ret
    }
  }
  subscribe(callback) {
    this.subscriptions.push(callback)
  }
}

export default SSM

