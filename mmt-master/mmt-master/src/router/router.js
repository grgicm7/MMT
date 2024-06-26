import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'
import Lea from '../components/Lea/Lea.vue'
import Obrazovanje from '../components/Lea/Obrazovanje.vue'
import Projekti from '../components/Lea/Projekti.vue'

import Lea from '../components/Marija/Marija.vue'
import Obrazovanje from '../components/Marija/Obrazovanje.vue'
import Projekti from '../components/Marija/Projekti.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/leagreguric',
        name: 'leagreguric',
        component: Lea
    },
    {
      path: '/leagreguric/obrazovanje',
      name: 'obrazovanje',
      component: Obrazovanje
  },
  {
    path: '/leagreguric/projekti',
    name: 'projekti',
    component: Projekti
}
  ],
})

const router2 = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/marijagrgic',
        name: 'marijagrgic',
        component: Lea
    },
    {
      path: '/marijagrgic/obrazovanje',
      name: 'obrazovanje',
      component: Obrazovanje
  },
  {
    path: '/marijagrgic/projekti',
    name: 'projekti',
    component: Projekti
}
  ],
})

export default router