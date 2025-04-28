import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    }, {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    }, {
      path: '/certificates',
      name: 'certificates',
      component: () => import('../views/CertificatesView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
})
export default router