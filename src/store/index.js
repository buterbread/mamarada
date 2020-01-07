import Vue from 'vue'
import Vuex from 'vuex'
import locales from './locales'
import cosmetics from './cosmetics'

Vue.use(Vuex);

export function createStore({ lang } = {}) {
  return new Vuex.Store({
    state() {
      return {}
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      locales: locales({ lang }),
      cosmetics
    },
  })
}
