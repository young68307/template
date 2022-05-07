import { createRouter, createWebHistory } from 'vue-router'

const base = '/'

const Routes = [
  {
    path: '/',
    name: 'Student-Record',
    component: () => import('view-pages/Student-Record/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(base),
  routes: Routes
})

export default router
