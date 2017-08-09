import Vue from 'vue'
import BotUI from '../node_modules/botui/build/botui.js'
import '../node_modules/botui/build/botui.min.css'
import '../node_modules/botui/build/botui-theme-default.css'

export default {
  name: 'main',
  mounted () {
    let botui = BotUI('my-botui-app', {vue: Vue})
    botui.message.add({content: 'Hello World from bot!'}).then(function () {
      botui.message.add({
        delay: 1000,
        human: true,
        content: 'Hello World from human!'
      })
    })
  }
}
