const state = {

  items: [],

}

// ---------------------------

const mutations = {

  pushProductToCart( state, { id } ) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  spliceProductFromCart( state, id) {
    const index = state.items.findIndex( item => item.id == id)
    state.items.splice(index, 1)
  },

  incrementItemQuantity( state, { id } ) {
    const item = state.items.find( item => item.id === id )
    item.quantity++
  },

  decrementItemQuantity( state, id ) {
    const item = state.items.find( item => item.id === id )
    item.quantity--
  },

  setItems( state, data ) {
    state.items = data
  },

}

// ---------------------------

const actions = {

  ADD_PRODUCT_TO_CART ( { state, commit }, product ) {
    if ( product.quantity > 0 ) {
      const cartItem = state.items.find( item => item.id === product.id )
      if ( !cartItem ) {
        commit('pushProductToCart', { id: product.id })
      } else  {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock => API
    }
  },

  decrementCheck( {state, commit }, id) {
    const item = state.items.find( item => item.id === id )
    if(item.quantity === 1) {
      commit('spliceProductFromCart', id)
    } else {
      commit('decrementItemQuantity', id)
    }
  },

}

// ---------------------------

const getters = {

  cartProducts: ( state, getters, rootState ) => {
    return state.items.map( ({ id, quantity }) => {
      const products = rootState.productsModule.products.find( product => product.id === id)
      return {
        title: products.title,
        price: products.price,
        brand: products.brand,
        images: products.images,
        quantity,
        id
      }
    })
  },

  cartTotalPrice: ( getters ) => {
    return getters.cartProducts.reduce( (total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },

}

// ---------------------------

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}