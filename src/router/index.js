import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import About from "../views/About"
import Pricing from "../views/Pricing"
import Features from "../views/Features"
import Contact from "../views/Contact"
import Privacy from "../views/Privacy"
import Work from "../views/Work"

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
      },
      {
        path: '/pricing',
        component: Pricing,
      },
      {
        path: '/features',
        component: Features,
      },
      {
        path: '/contact',
        component: Contact,
      },
      {
        path: '/privacy',
        component: Privacy,
      },
      {
        path: '/work',
        component: Work,
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
