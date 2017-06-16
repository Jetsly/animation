import Router from 'vue-router'

import Matchman from '../views/pixi/Matchman.vue'

const routes = [{
  path: '/pixi/Matchman',
  component: Matchman
}, {
  path: '/',
  redirect: '/pixi/Matchman'
}]
export default new Router({
  routes
})