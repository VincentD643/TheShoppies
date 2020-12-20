<template>
  <v-container>
    <div v-if="movieResultsHistory.length != 0">
        <getSearchResults :moviesProps="movieResultsHistory"/>
    </div>
    <div v-else>
        <v-img 
            src="../../assets/undraw_empty_xct9.svg"  
            max-height="75%"
            max-width="100%">
        </v-img>
        <v-img
            src="../../assets/SearchHistoryIsEmpty.svg"  
            max-height="75%"
            max-width="100%">
        </v-img>

    </div>
    
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import getSearchResults from './SearchResults'
  export default {
    name: 'SearchHistory',
    components: {
        getSearchResults
    },
    data() {
      return {
        
      }
    },
    computed: {
    ...mapGetters([
      'movieResultsHistory',
    ]),
    methods: {
        created: function () {
            console.log(this.movieResultsHistory)
        },
        addWatchLater(movie) {
            this.$emit('AddWatchLater', movie)
        },
        addNomination(movie) {
            this.$emit('AddNomination', movie)
        }
    }
  },
  }
</script>
<style>

.historyCenter{
  margin: auto;
  width: 25%;
}

.imageSize{
    min-height: 400px;
}

</style>
