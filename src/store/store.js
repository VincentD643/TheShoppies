import Vue from 'vue'
import Vuex from 'vuex'
import * as OmdbModule from './modules/OmdbStore'

Vue.use(Vuex)

const state = {
  success: false,
  error: false,
  timeout: 6000,
  loading: false,
  nbOfLoadingProcesses: 0,
}

const getters = {
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  },
  success (state) {
    return state.success
  },
  timeout (state) {
    return state.timeout
  }

}

export const mutations = {
  setLoading (state, loading) {
    if (loading) {
      state.nbOfLoadingProcesses += 1
    } else {
      state.nbOfLoadingProcesses -= 1
    }

    if (state.nbOfLoadingProcesses > 0) {
      state.loading = true
    } else {
      state.loading = false
    }
  },

  setError (state, error) {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
    state.error = error
  },

  setSuccess (state, success) {
    state.success = success
  }
}

export const actions = {
}

export default new Vuex.Store({
  modules: {
    OmdbModule
  },
  actions,
  getters,
  mutations,
  state
})
