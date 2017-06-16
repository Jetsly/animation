import Vue from 'vue'
import router from './routers'
import store from './stores'
import App from './App.vue'

// mount
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')