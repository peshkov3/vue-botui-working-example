// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BotUI from '../node_modules/botui/build/botui.js'

// BotUI
import '../node_modules/botui/build/botui.min.css'
import '../node_modules/botui/build/botui-theme-default.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

let botui = BotUI('my-botui-app', {
  vue: Vue
})

botui.message.add({
  content: 'Hello World from bot!'
}).then(function () {
  botui.message.add({
    delay: 1000,
    human: true,
    content: 'Hello World from human!'
  })
})
