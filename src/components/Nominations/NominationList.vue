<template>
  <v-container>
    <v-img v-if="nominatedMovies.length == 0" src="../../assets/EmptyNominationList.svg"></v-img>
    <SearchResults v-on:RemoveNomination="removeNomination" :isNomination="true" :moviesProps="nominatedMovies"/>
  </v-container>
</template>

<script>
import SearchResults from './SearchResults'
  export default {
    name: 'NominationsList',
    props: ['nominatedMovies'],
    components: {
      SearchResults
    },
    data() {
      return {
        
      }
    },
    methods: {
        removeNomination(value) {
            this.$emit('RemoveNomination',value)
        }
    }
  }
</script>
