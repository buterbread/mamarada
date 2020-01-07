export default ({ lang } = {}) => ({
  namespaced: true,

  state: {
    locale: lang
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

      document.cookie=`lang=${locale}`;
    }
  },

  getters: {
    locale: (state) => {
      return state.locale
    }
  }
})
