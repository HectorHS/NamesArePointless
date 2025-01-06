import { createRouter, createWebHistory } from 'vue-router'

// lazy loading for all routes
const Error = () => import('@/views/Error.vue')
const Home = () => import('@/views/Home.vue')
const Vietnam = () => import('@/views/Vietnam.vue')
const Mayako = () => import('@/views/Mayako.vue')
const MusicVillage = () => import('@/views/MusicVillage.vue')
const Experiments = () => import('@/views/Experiments.vue')
const Current = () => import('@/views/Current.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },    
    {
      path: '/vietnam',
      name: 'vietnam',
      component: Vietnam
    },  {
      path: '/mayako',
      name: 'mayako',
      component: Mayako
    }, {
      path: '/music-village',
      name: 'musicVillage',
      component: MusicVillage
    }, {
      path: '/ceramics/experiments',
      name: 'experiments',
      component: Experiments
    }, {
      path: '/ceramics/current',
      name: 'current',
      component: Current
    }, {
      path: "/:pathMatch(.*)*",
      name: 'Error',
      component: Error,
    },]

});

export default router
