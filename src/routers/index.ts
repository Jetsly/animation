import Router from 'vue-router';

import Hanoi from '../views/pixi/Hanoi.vue';
import Matchman from '../views/pixi/Matchman.vue';

const routes = [{
  path: '/pixi/Matchman',
  component: Matchman,
},
{
  path: '/pixi/Hanoi',
  component: Hanoi,
}, {
  path: '/',
  redirect: '/pixi/Hanoi',
},
];
export default new Router({
  routes,
});