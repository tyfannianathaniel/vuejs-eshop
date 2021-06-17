import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const isAuthenticated = true;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    beforeEnter: (to, from, next) => {
        if (!isAuthenticated) next({ name: 'Login' })
        else next()
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/Checkout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'CartCheckout' },
      },      {
        path: '/order',
        name: 'CartCheckout',
        component: () => import('@/components/Checkout/CartCheckout.vue'),
        beforeEnter: (to, from, next) => {
          // if (!isAuthenticated) next({ name: 'Login' })
          // else next()
          next()
        }
      },
      {
        path: 'address',
        name: 'AddressCheckout',
        component: () => import('@/components/Checkout/ShippingDelivery.vue'),
        beforeEnter: (to, from, next) => {
          if (!isAuthenticated) next({ name: 'Login' })
          else next()
        }

      },
      {
        path: 'payment',
        component: () => import('@/components/Checkout/BillingPayment.vue'),
        beforeEnter: (to, from, next) => {
          if (!isAuthenticated) next({ name: 'Login' })
          else next()
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/products/:id',
    name: 'Products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'SignIn',
    component: () => import('@/views/Signin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

