<template>
  <v-container>
    <SearchResults :moviesProps="nominatedMovies"/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchResults from './SearchResults'
  export default {
    name: 'NominationsList',
    components: {
      SearchResults
    },
    data() {
      return {
        
      }
    },
    computed: {
        ...mapGetters([
        'nominatedMovies',
        ]),
    }
  }
</script>
