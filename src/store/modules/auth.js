// import axios from 'axios'
// import api from '@/services/api/user'

const state = {
  user: null,
}

// ---------------------------

const getters = {
  isAuthenticated: (state) => !!state.user,
  getUser: (state) => state.user,
}

// ---------------------------

const actions = {

  REGISTER( {dispatch}, form ) {

    if(form.password !== form.passwordConfirm) {
      return false
    }

    let user = {
      "firstname": form.firstname,
      "lastname": form.lastname,
      "email": form.email,
      "passwd": form.password,
      "birthday": form.birthday
    }

    dispatch('LOGIN', user)

  },

  async LOGIN( {commit}, user ) {
    await commit("setUser", user.firstname)
  },

  async LOGOUT( {commit} ) {
    commit("logout", null);
  },
}

// ---------------------------

const mutations = {

  setUser( state, username ) {
    state.user = username
  },

  logout( state, user) {
    state.user = user
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