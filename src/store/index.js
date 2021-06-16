import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import langs from './modules/langs'
import products from './modules/products'
import user from './modules/user'
import auth from './modules/auth'

export default createStore({
  modules: {
    cart,
    langs,
    products,
    user,
    auth,
  },
  plugins: [
    createPersistedState()
  ],
})
