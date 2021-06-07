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
            console.log(products)
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
    isBestseller(state) {

      return state.products.sort( (a, b) => {
            return parseFloat(b.sold) - parseFloat(a.sold)
          }).slice(0, 3)
    }
    
  },
  modules: {
  }
})
