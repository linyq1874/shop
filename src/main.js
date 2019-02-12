import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

import "babel-polyfill"; //解决IE兼容
// import "current-script-polyfill";

// 引入公共css文件
import '../public/css/reset.css'

// 引入全局过滤器
import './filters/index'

/**
 * 1. 移动端浏览器在派发点击事件的时候，通常会出现300ms左右的延迟
 * 2. 原因: 移动端的双击会缩放导致click判断延迟
 */
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
