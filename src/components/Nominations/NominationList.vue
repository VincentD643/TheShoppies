<template>
  <v-container>
    <v-img v-if="nominatedMovies.length == 0" src="../../assets/EmptyNominationList.svg"></v-img>
    <SearchResults v-on:RemoveNomination="removeNomination" :isNomination="true" :moviesProps="nominatedMovies"/>
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
    },
    methods: {
        removeNomination(value) {
            this.$emit('RemoveNomination',value)
        }
    }
  }
</script>
