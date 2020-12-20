<template>
  <v-container>
    <v-text-field
        v-model="searchTerm"
        label="Search"
        clearable
    ></v-text-field>
    <SearchResults :moviesProps="movieResults" />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchResults from './SearchResults'
import { debounce } from 'debounce'
  export default {
    name: 'Search',
    components: {
        SearchResults
    },
    data() {
      return {
        searchTerm: ""
      }
    },
    watch: {
        searchTerm: function () {
            this.debounceSearch()
        }
    },
    methods:{
        ...mapActions({
            getSearchResults: 'getSearchResults'
        }),
        debounceSearch: debounce(function () {
            this.getSearchResults(this.searchTerm)
        }, 500),
    },
    computed: {
    ...mapGetters([
      'movieResults',
    ])
  },
  }
</script>
<style>
</style>
