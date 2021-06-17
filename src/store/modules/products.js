import api from '@/services/api/products'

// ---------------------------

const state = {

  products: [],
  isLoading: true,

}

// ---------------------------

const mutations = {

  setProducts( state, data ) {
    state.products = data.filter(product => product.on_sale === true)
  },

  setLoader( state, data ) {
    state.isLoading = data
  },

}

// ---------------------------

const actions = {

  FETCH_PRODUCTS({ commit }) {
    return new Promise(
      function ( resolve ) {
        api.getProducts( data => {
          commit( 'setLoader', false)
          commit( 'setProducts', data )
          resolve()
        })
      }
    )
  },

}

// ---------------------------

const getters = {

  getAvailableProducts( state ) {
    return state.products
            .filter( product => product. quantity > 0 )
  },

  isBestseller( state ) {
    return state.products
            .sort( (a, b) => +b.sold - +a.sold )
            .slice(0, 3)
  }
}

// ---------------------------

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}