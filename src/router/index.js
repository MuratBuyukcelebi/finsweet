import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home"
import about from "../views/about"
import pricing from "../views/pricing"
import features from "../views/features"
import contact from "../views/contact"
import privacy from "../views/privacy"
import work from "../views/work"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Layout/App'),
    children: [
      {
        path: '/',
        component: home,
      },
      {
        path: '/about',
        component: about,
      },
      {
        path: '/pricing',
        component: pricing,
      },
      {
        path: '/features',
        component: features,
      },
      {
        path: '/contact',
        component: contact,
      },
      {
        path: '/privacy',
        component: privacy,
      },
      {
        path: '/work',
        component: work,
      }
    ]
  },
  {
    path: '/pages',
    component: () => import('../views/pages'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
