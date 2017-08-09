<template>
    <div>
        <router-link to='/child' class='p'>Child</router-link>
        <h3>The botui below should reappear after switching to child and back to home</h3>
        <p>The only way right now is to hit refresh</p>
        <p>Is there a way to refresh this in Vue?</p>
        <div class="botui-app-container" id="my-botui-app">
            <bot-ui></bot-ui>
        </div>
    </div>
</template>
<script>
  import Vue from 'vue'
  import BotUI from '../../node_modules/botui/build/botui.js'
  import '../../node_modules/botui/build/botui.min.css'
  import '../../node_modules/botui/build/botui-theme-default.css'

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
</script>