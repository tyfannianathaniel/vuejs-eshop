import { createStore } from 'vuex'

import cartModule from './modules/cart'
import langsModule from './modules/langs'
import productsModule from './modules/products'

export default createStore({
  modules: {
    cartModule,
    langsModule,
    productsModule,
  },
})
