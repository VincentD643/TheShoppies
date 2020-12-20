import Vue from 'vue'
import Vuex from 'vuex'
import OmdbApi from '../../services/OmdbApi'

Vue.use(Vuex)

export const state = {
    movieResults: [],
    movieResultsHistory: [],
    nominatedMovies: [],
    watchLaterMovies: []
}
export const getters = {
    movieResults (state) {
        return state.movieResults
    },
    movieResultsHistory (state) {
        return state.movieResultsHistory
    },
    nominatedMovies (state) {
        return state.nominatedMovies
    }
}
//need to switch to vue.delete || vue.set
export const mutations = {
    setMovieResults (state, results) {
        state.movieResults = results
    },
    addMovieResultsToHistory (state, results) {
        state.movieResultsHistory.push.apply(state.movieResultsHistory, results)
    },
    addNominatedMovie(state, movie) {
        state.nominatedMovies.push(movie)
        state.movieResults.slice(0, state.movieResults.findIndex(m => m.imdbID == movie.imdbID))
        state.movieResultsHistory.slice(0, state.movieResultsHistory.findIndex(m => m.imdbID == movie.imdbID))
    },
    removeNominatedMovie(state, movie) {
        state.movieResults.push(movie)
        state.movieResultsHistory.push(movie)
        state.nominatedMovies.slice(0, state.nominatedMovies.findIndex(m => m.imdbID == movie.imdbID))
    },

    addWatchLaterMovie(state, movie) {
        state.watchLaterMovies.push(movie)
    },

    removeWatchLaterMovie(state, movie) {
        state.watchLaterMovies.slice(0, state.watchLaterMovies.findIndex(m => m.imdbID == movie.imdbID))
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
    },

    removeNominatedMovie({ commit }, movie) {
      commit('removeNominatedMovie', movie)
    },

    addNominatedMovie({ commit }, movie) {
      commit('addNominatedMovie', movie)
    },
    addWatchLaterMovie( {commit }, movie) {
        commit('addWatchLaterMovie', movie)
    }
}

