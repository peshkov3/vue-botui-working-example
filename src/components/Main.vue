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
   let obj = require('../my-botui-file')

   export default obj.default
</script>