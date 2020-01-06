import Vue from 'vue'
import Vuex from 'vuex'
import locales from './locales'
import cosmetics from './cosmetics'

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state() {
      return {}
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      locales,
      cosmetics
    },
  })
}
