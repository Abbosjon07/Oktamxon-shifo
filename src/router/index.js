import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import page404 from '../views/404view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    
    // 404 ------------->>>>>>>>>>>>
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: page404
    },
    // 404 ------------->>>>>>>>>>>>
  ]
})

export default router
