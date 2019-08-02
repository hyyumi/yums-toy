import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout'

Vue.use(Router)

export const menuRouterMap = [
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/account',
      redirect: '/account/login',
      component: () => import('@/views/account/layout'),
      children: [
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/account/login')
        },
        {
          name: 'Join',
          path: 'join',
          component: () => import('@/views/account/join')
        }
      ]
    },
    {
      path: '',
      redirect: '/',
      component: DefaultLayout,
      children: [
        {
          name: 'Home',
          path: '/',
          component: () => import('@/views/Home')
        },
        ...menuRouterMap
      ]
    }
  ]
})
