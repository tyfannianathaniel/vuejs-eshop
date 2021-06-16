import axios from 'axios'

const state = {
  user: true,
}

// ---------------------------

const getters = {
  isAuthenticated: (state) => !!state.user,
  getUser: (state) => state.user,
}

// ---------------------------

const actions = {

  async REGISTER( {dispatch}, form ) {

    await axios.post('register', form)
    const UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)

    // after sign in, log in
    await dispatch('LOGIN', UserForm)
  },

  async LOGIN( {commit}, user ) {
    await axios.post("login", user)
    await commit("setUser", user.get("username"))
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