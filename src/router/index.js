import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import About from "../views/About"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Layout/App'),
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/about',
        component: About,
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
