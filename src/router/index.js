import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router