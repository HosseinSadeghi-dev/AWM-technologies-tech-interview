import { createRouter, createWebHistory } from 'vue-router'
import WizardView from "@/views/WizardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WizardView
    },
    {
      path: '/description',
      name: 'description',
      component: () => import('../views/DescriptionView.vue')
    }
  ]
})

export default router
