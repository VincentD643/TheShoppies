import Vue from 'vue'
import Vuex from 'vuex'
import OmdbApi from '../../services/OmdbApi'

Vue.use(Vuex)

export const state = {
    movieResults: [],
    movieResultsHistory: [],
    nominatedMovies: [],
    lastSearch: [],
    nbOfPages: 0
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
    },
    nbOfPages (state) {
        return state.nbOfPages
    },
}
export const mutations = {
    setNbOfPages (state, n) {
        state.nbOfPages = Math.ceil(n/10)
    },
    setMovieResults (state, results) {
        if (results) {
            state.movieResults = results
             //I need a copy of the search because I want to know if i need to add back the movie to the search when removing nomination or if its a new search
            state.lastSearch = JSON.parse(JSON.stringify(results))
        } else {
            state.movieResults = []
            state.lastSearch = []
        }
    },

    addMovieResults (state, results) {
        state.movieResults.push.apply(state.movieResults, results)
    },

    addMovieResultsToHistory (state, results) {
        state.movieResultsHistory.push.apply(state.movieResultsHistory, results)
        //remove duplicates in case we do the same search multiple time
        let uniq = new Set(state.movieResultsHistory.map(e => JSON.stringify(e)));
        state.movieResultsHistory = Array.from(uniq).map(e => JSON.parse(e));
    },
    addNominatedMovie(state, movie) {
        state.nominatedMovies.push(movie)
        Vue.delete(state.movieResults, state.movieResults.findIndex(m => m.imdbID == movie.imdbID))
        Vue.delete(state.movieResultsHistory, state.movieResultsHistory.findIndex(m => m.imdbID == movie.imdbID))
    },
    removeNominatedMovie(state, movie) {
        if (state.lastSearch.findIndex(m => m.imdbID == movie.imdbID) != -1) {
            state.movieResults.push(movie)
        }
        state.movieResultsHistory.push(movie)
        Vue.delete(state.nominatedMovies, state.nominatedMovies.findIndex(m => m.imdbID == movie.imdbID))
    },

    removeNominations(state) {
        for(let movie in state.nominatedMovies) {
            if (state.lastSearch.findIndex(m => m.imdbID == movie.imdbID) != -1) {
                state.movieResults.push(movie)
            }
        }
        state.movieResultsHistory.push.apply(state.movieResultsHistory, state.nominatedMovies)
        state.nominatedMovies = []

    },

    setNominatedMovies(state, movies) {
        state.nominatedMovies = movies
    }
    
}

export const actions = {

  getSearchResults ({ commit }, payload) {
    commit('setLoading', true)
    commit('setError', false)
    return OmdbApi.getMoviesWithTitle(payload.title.trim())
    .then(results => {
        commit('setNbOfPages', results.totalResults )
        commit('setMovieResults', results.Search)
        commit('addMovieResultsToHistory', results.Search)
    })
    .catch(error => {
        commit('setError', {message: error })
    })
    .finally(() => {
        commit('setLoading', false)
        })
    },

    getSearchResultsWithPageNumber({ commit }, payload) {
        commit('setLoading', true)
        commit('setError', false)
        return OmdbApi.getMoviesWithTitleAndPageNumber(payload.title.trim(), payload.page)
        .then(results => {
            commit('addMovieResults', results.Search)
            commit('addMovieResultsToHistory', results.Search)
        })
        .catch(error => {
            commit('setError', { message: error })
        })
        .finally(() => {
            commit('setLoading', false)
        })
    },

    removeNominatedMovie({ commit }, movie) {
      commit('removeNominatedMovie', movie)
      commit('setSuccess', { message: movie.Title + ' was removed from your nomination list'})
    },

    removeNominations({ commit }) {
        commit('removeNominations')
        commit('setSuccess', { message: 'All movies were removed from your nomination list'})
    },

    addNominatedMovie({ commit }, movie) {
      if (state.nominatedMovies.length == 5) {
        commit('setError', { message: 'Your nomination list is full ! Please delete a nomination before adding a new one.' })
      } else {
        commit('addNominatedMovie', movie)
        commit('setSuccess', { message: movie.Title + ' was added to your nomination list'})
      }
    },

    setNominatedMovies( {commit }, movies) {
        commit('setNominatedMovies', movies)
    }
}

