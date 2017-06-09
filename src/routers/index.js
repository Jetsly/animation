import Router from 'vue-router'

import Chess from '../views/pixi/Chess.vue'

const routes = [{
  path: '/pixi/chess',
  component: Chess
}, {
  path: '/',
  redirect: '/pixi/chess'
}]
export default new Router({
  routes
})
