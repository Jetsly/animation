import Router from 'vue-router';

import Index from '../views/Index.vue';
import Hanoi from '../views/pixi/Hanoi.vue';
import Breakout from '../views/pixi/Breakout.vue';
import Matchman from '../views/pixi/Matchman.vue';

const routes = [{
  path: '/pixi/Matchman',
  component: Matchman,
},
{
  path: '/pixi/Breakout',
  component: Breakout,
},
{
  path: '/pixi/Hanoi',
  component: Hanoi,
}, {
  path: '/',
  component: Index,
},
];
export default new Router({
  routes,
});
