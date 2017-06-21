<template>
  <transition name="fade" mode="out-in">
    <router-view class="wrapper-content markdown-body"></router-view>
  </transition>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
 
  @Component({
    props: {
      propMessage: String
    }
  })
  export default class App extends Vue {
    
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Menlo, Monaco, Consolas, "Helvetica Neue", Helvetica, "Courier New", 微软雅黑, monospace, Arial, sans-serif, 黑体;
    text-decoration: none;
  }
  body,html {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
</style>
