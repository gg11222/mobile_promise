// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './http'
import './components/ElementUI.js'
// import {
//   Form,
//   FormItem,
//   Input,
//   Button
// } from 'element-ui';
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Input)
// Vue.use(Button)
// import http from './http.js'
process.env.MOCK && require('@/mock')
Vue.config.productionTip = false
Vue.prototype.$http=http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
