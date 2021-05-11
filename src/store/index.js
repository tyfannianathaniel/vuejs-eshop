import { createStore } from 'vuex'
import catalog from '@/api/products'

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products.filter(product => product.on_sale === true)
    }
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
    }
  },
  getters: {
    availableProducts(state) {
      return state.products.filter(product => product.quantity > 0)
    },
  },
  modules: {
  }
})
