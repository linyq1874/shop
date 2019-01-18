import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/Home.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/Order.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/Search.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile/Profile.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
