function getInitialLocale() {
  if (process.browser) {
    return window.localStorage.getItem('locale') || 'ua'
  }

  return 'ua'
}

export default {
  namespaced: true,

  state: {
    locale: getInitialLocale()
  },

  mutations: {
    SET_LOCALE (state, locale) {
      state.locale = locale
    }
  },

  actions: {
    setLocale (state, locale) {
      const { commit } = state;
      commit('SET_LOCALE', locale);

      window.localStorage.setItem('locale', locale);
    }
  },

  getters: {
    locale: (state) => {
      return state.locale
    }
  }
}
