<template>
  <v-container>
  <div v-if="nominatedMovies.length == 0" class="paddingArrow">
    <v-img src='../assets/vectorpaint.svg' width="5%"/>
  </div>
  <v-img src='../assets/MyNominations_.svg'  width="40%"/>
  <NominationsList :nominatedMovies="nominatedMovies" v-on:RemoveNomination="removeNomination" v-on:RemoveAllNominations="removeAllNominations"/>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NominationsList from './Nominations/NominationList'
  export default {
    name: 'Home',
    components: {
      NominationsList
    },
    data() {
      return {
        
      }
    },
    methods: {
      ...mapActions({
        removeNominatedMovie: 'removeNominatedMovie',
        removeNominations: 'removeNominations'
      }),
      removeNomination(value) {
        this.removeNominatedMovie(value)
        localStorage.setItem('nominatedMovies', JSON.stringify(this.nominatedMovies))
      },
      removeAllNominations() {
        this.removeNominations()
        localStorage.setItem('nominatedMovies', JSON.stringify(this.nominatedMovies))
      }
    },
    computed: {
      ...mapGetters([
        'movieResultsHistory',
        'movieResults',
        'nominatedMovies',
        'nbOfPages'
      ])
    },
  }
</script>
<style>
.paddingArrow{
  padding-top:5%;

}
</style>