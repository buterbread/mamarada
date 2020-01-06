import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cosmetics from '../views/Cosmetics.vue'
import About from '../views/About.vue'

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
        component: Cosmetics
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]

    const router = new VueRouter({
      routes,
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
