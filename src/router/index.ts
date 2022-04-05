import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import(/* webpackChunkName: "rank" */ '@/views/RankView.vue'),
  },
  {
    path: '/user/:username',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/UserView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
