import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cosmetics from '../views/Cosmetics.vue'

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
      name: 'cosmeticsDetails',
      component: Cosmetics
    }
  ]

  const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior: (to) => {
      if (to.hash) {
        return {
          selector: to.hash
        };
      }

      return {}
    }
  })

  return router;
}
