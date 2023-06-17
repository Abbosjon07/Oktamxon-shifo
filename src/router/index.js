import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/logo',
    //   name: 'logo',
    //   component: () => import('../views/LogoView.vue')
    // },
    
    // 404 ------------->>>>>>>>>>>>
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: '404',
    //   component: page404
    // },
    // 404 ------------->>>>>>>>>>>>
  ]
})

export default router
