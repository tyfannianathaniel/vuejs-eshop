import api from '@/api/langs'

const state = {

  langs: [],

}

// ---------------------------

const mutations = {

  setLangs( state, data ) {
    state.langs = data.filter( lang => lang.active === true )
  },

}

// ---------------------------

const actions = {

  FETCH_LANGS({ commit }) {
    return new Promise(
      function ( resolve ) {
        api.getLangs( data => {
          commit( 'setLangs', data )
          resolve()
        })
      }
    )
  },

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