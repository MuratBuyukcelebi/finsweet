import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Layout/App'),
    children: [
      {
        path: '/',
        component: Home,
      }
    ]
  },
  {
    path: '/pages',
    component: () => import('../views/Pages'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
