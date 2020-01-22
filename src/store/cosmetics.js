import api from '../generateApi'

export default {
  namespaced: true,

  state: {
    loading: false,
    list: [],
    item: null,
    errors: [],
    timestamp: null
  },

  mutations: {
    SET_LIST (state, data) {
      state.list = data
    },

    SET_ITEM (state, data) {
      state.item = data
    },

    TOGGLE_LOADING (state, loading) {
      state.loading = loading
    },
  },

  actions: {
    async fetchListData ({ commit }) {
      commit('TOGGLE_LOADING', true);

      const response = await api.cosmetics.getListData();

      const { data } = response;

      commit('SET_LIST', data);

      commit('TOGGLE_LOADING', false);
    },

    async fetchItemData ({ commit }, id) {
      const response = await api.cosmetics.getItemData(id);
      const { data } = response;

      commit('SET_ITEM', data)
    }
  },

  getters: {
    list (state) {
      return state.list
    },
    item (state) {
      return state.item
    },
    loading (state) {
      return state.loading
    }
  }
}
