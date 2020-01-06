import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export function createRouter() {
    const routes = [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/cosmetics/:id',
        name: 'Cosmetics',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "cosmetics" */ '../views/Cosmetics.vue')
      }
    ]

    const router = new VueRouter({
      routes
    })

    return router;
}
