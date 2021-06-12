import { createStore } from 'vuex';
import catalog from '@/api/products';
import langs from '@/api/langs';

export default createStore({
  state: {
    products: [],
    langs: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products.filter(product => product.on_sale === true)
    },
    setLangs(state, data) {
      state.langs = data.filter(lang => lang.active === true)
    },
  },
  actions: {
    fetchProducts(context) {
      return new Promise(
        function (resolve) {
          catalog.getProducts(products => {
            context.commit('setProducts', products)
            resolve()
          })
        }
      )
    },
    fetchLangs(context) {
      return new Promise(
        function (resolve) {
          langs.getLangs(langs => {
            context.commit('setLangs', langs)
            resolve()
          })
        }
      )
    },
  },
  getters: {
    availableProducts(state) {
      return state.products.filter(product => product.quantity > 0)
    },
    isBestseller(state) {
      return state.products
              .sort( (a, b) => parseFloat(b.sold) - parseFloat(a.sold) )
              .slice(0, 3)
    }
  },
  modules: {
  }
})
