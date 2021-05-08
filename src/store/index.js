import { createStore } from 'vuex'
import catalog from '@/api/products'

export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
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
      return state.products.filter(product => product.available === true)
    }
  },
  modules: {
  }
})
