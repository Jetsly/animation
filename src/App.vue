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
  a {
    text-decoration: none;
  }
</style>
