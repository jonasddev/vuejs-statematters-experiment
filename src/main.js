// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import products from './dao/products'
import SSM from './tools/SSM'

let logplugin = function(store) {
  store.subscribe( (moduleName, mutationName, args, state) => {
    console.log(`${moduleName}.${mutationName}(${args}) -> ${JSON.stringify(state)}`)
  })
}

let s = new SSM({modules: { products }, plugins: [logplugin]})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
