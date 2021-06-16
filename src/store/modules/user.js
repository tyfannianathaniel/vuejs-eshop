// import api from '@/api/user'

const state = {

  user: [],
  isLoggedIn: true,

}

// ---------------------------

const mutations = {

  setUser( state, data ) {
    state.user = data
  },

}

// ---------------------------

const actions = {

  // DON'T USE LOCAL STORAGE : https://dev.to/rdegges/please-stop-using-local-storage-1i04
  // => tout le monde n'est pas d'accord sur l'utilisation de local storage...
  //
  // https://www.smashingmagazine.com/2020/10/authentication-in-vue-js/
  // https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
  // https://medium.com/js-dojo/vue-js-app-in-real-world-components-best-practices-consuming-apis-auth-routing-f02a0358971a
  // https://blog.sqreen.com/authentication-best-practices-vue/

  // https://stackoverflow.com/questions/20963273/spa-best-practices-for-authentication-and-session-management
  // https://jcbaey.com/authentication-in-spa-reactjs-and-vuejs-the-right-way
}

// ---------------------------

const getters = {

}

// ---------------------------

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}