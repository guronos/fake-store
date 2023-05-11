import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product_list: [],
    URL: 'https://fakestoreapi.com/products?limit=12',
    favoritesList: [],
  },
  getters: {
    showProduct(state) {
      return state.product_list;
    },
    showCountFavorites(state) {
      return state.product_list.filter((item) => item.favorites === true);
    },
  },
  mutations: {
    setProductList(state, list) {
      list.forEach((item) => {
        item.favorites = false;
        state.product_list.push(item);
      });
    },
    addAndRemoveFavorites(state, productItem) {
      const [selectProduct] = state.product_list.filter((item) => item === productItem);
      selectProduct.favorites = !selectProduct.favorites;
    },
    addFavorites(state, productItem) {
      const [selectProduct] = state.product_list.filter((item) => item === productItem);
      selectProduct.favorites = true;
    },
  },
  actions: {
    async getProductList({ commit }) {
      const rawData = await fetch(`${this.state.URL}`);
      const products = await rawData.json();
      commit('setProductList', products);
    },
  },
});
