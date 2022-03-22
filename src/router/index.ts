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
    path: '/user/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "rank" */ '@/views/UserView.vue'),
  },
  {
    path: '/track',
    name: 'track',
    component: () => import(/* webpackChunkName: "rank" */ '@/views/TrackView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
