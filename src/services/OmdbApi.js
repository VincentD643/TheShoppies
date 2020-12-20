import Vue from 'vue'

const baseUrl = process.env.VUE_APP_OMDB_API
const key = process.env.VUE_APP_OMDB_API_KEY

export default {

  getMoviesWithTitle(search) {
    return Vue.http.get(`${baseUrl}s=${search}${key}`)
    .then(response => response.json())
    .catch(errorResponse => {
      throw errorResponse.body.error
    })
  },

  getMoviesWithTitleGenre(search) {
    return Vue.http.get(`${baseUrl}s=${search.title}&type=${search.type}${key}`)
    .then(response => response.json())
    .catch(errorResponse => {
      throw errorResponse.body.error
    })
  },

  getMoviesWithTitleGenreYear(search) {
    return Vue.http.get(`${baseUrl}s=${search.title}&type=${search.type}${key}`)
    .then(response => response.json())
    .catch(errorResponse => {
      throw errorResponse.body.error
    })
  }
}
