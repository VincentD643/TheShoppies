<template>
  <v-container>
    <v-text-field
      v-model="searchTerm"
      label="Search"
    ></v-text-field>  
    <div v-if="movieResults.length != 0">
      <SearchResults v-on:AddNomination="addNomination" :moviesProps="movieResults" />
    </div>
    <div class="centerImages" v-else>
        <v-img 
            src="../../assets/undraw_movie_night_fldd.svg"  
            max-height="75%"
            max-width="80%">
        </v-img>
        <v-img
            src="../../assets/SearchMovies.svg"  
            max-height="75%"
            max-width="80%">
        </v-img>

    </div>
    <v-btn class="loadMoreButton" @click="loadMoreResults()" v-if="currentPage < nbOfPages" >Load More</v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import SearchResults from './SearchResults'
import { debounce } from 'debounce'
  export default {
    name: 'Search',
    props: ['movieResults', 'nbOfPages'],
    components: {
        SearchResults
    },
    data() {
      return {
        searchTerm: "",
        sheet: false,
        currentPage: 1
      }
    },
    watch: {
        searchTerm: function () {
            this.debounceSearch()
        }
    },
    methods:{
        ...mapActions({
            getSearchResults: 'getSearchResults',
            getSearchResultsWithPageNumber: 'getSearchResultsWithPageNumber'
        }),
        debounceSearch: debounce(function () {
          this.getSearchResults({ 'title': this.searchTerm})
        }, 500),
        loadMoreResults() {
          this.currentPage++
          this.getSearchResultsWithPageNumber({ 'title': this.searchTerm.trim(), 'page' : this.currentPage})
        },
        addNomination(value) {
          this.$emit('AddNomination', value)
        }

    }
  }
</script>
<style>

.loadMoreButton{
  margin: auto;
  width: 100%;
}

.centerImages{
  padding-left:9%
}
</style>
