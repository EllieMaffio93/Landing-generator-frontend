import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import DashboardView from './pages/DashboardView.vue'
import LoginView from './pages/LoginView.vue'
import SignupView from './pages/SignupView.vue'
import ProjectView from './pages/ProjectView.vue'
import ProjectsList from './pages/ProjectsList.vue'

const routes = [
  { path: '/', component: HomeView },
  {
    path: '/dashboard',
    component: DashboardView,
    children: [
      { path: 'projects', component: ProjectsList },
      { path: 'projects/:id', name: "Project", component: ProjectView }
    ]
  },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})