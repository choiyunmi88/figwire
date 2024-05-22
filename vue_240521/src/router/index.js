import { createRouter, createWebHistory } from 'vue-router'
import MainVeiw from '../MainVeiw.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainVeiw
    },
  ],
});

export default router
