import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

import '../public/css/reset.css'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
