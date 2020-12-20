import Vue from 'vue'
import Vuex from 'vuex'
import OmdbApi from '../../services/OmdbApi'

Vue.use(Vuex)

export const state = {
    movieResults: [],
    movieResultsHistory: []
}
export const getters = {
    movieResults (state) {
        return state.movieResults
    },
    movieResultsHistory (state) {
        console.log('return history')
        return state.movieResultsHistory
    }
}

export const mutations = {
    setMovieResults (state, results) {
        state.movieResults = results
    },
    addMovieResultsToHistory (state, results) {
        console.log(results)
        state.movieResultsHistory.push.apply(state.movieResultsHistory, results)
    }
}

export const actions = {

  getSearchResults ({ commit }, payload) {
    commit('setLoading', true)
    commit('setError', false)
    return OmdbApi.getMoviesWithTitle(payload)
    .then(results => {
        commit('setMovieResults', results.Search)
        commit('addMovieResultsToHistory', results.Search)
    })
    .catch(error => {
        commit('setError', error)
    })
    .finally(() => {
        commit('setLoading', false)
    })
    
  }
}

