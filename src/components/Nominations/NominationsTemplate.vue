<template>
  <v-container>
    <v-tabs fixed-tabs centered>
      <v-tab>
        Nominations
      </v-tab>
      <v-tab-item>
        <Search v-on:AddNomination="addNomination" :movieResults="movieResults" :nbOfPages="nbOfPages"/>
      </v-tab-item>
      <v-tab>
        Search History
      </v-tab>
        <v-tab-item>
        <SearchHistory v-on:AddNomination="addNomination" :movieResultsHistory="movieResultsHistory"/>
      </v-tab-item>
    </v-tabs>
    <v-bottom-sheet  height="70%" v-model="sheet">
      <v-sheet
        class="text-center"
         height="700px"
      >
      <NominationsList :nominatedMovies="nominatedMovies" v-on:RemoveNomination="removeNomination" v-on:RemoveAllNominations="removeAllNominations"/>
      <v-btn
        class="mt-6"
        text
        color="red"
        @click="sheet = !sheet"
      >
        close
      </v-btn>
      </v-sheet>
    </v-bottom-sheet>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" v-bind="attrs" @click="sheet = !sheet" fab dark large color="primary" fixed right bottom>
            <v-icon dark>mdi-star</v-icon>
        </v-btn>
      </template>
      <span> Your nominations</span>
    </v-tooltip>
    
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchHistory from './SearchHistory'
import NominationsList from './NominationList'
import Search from './Search'
  export default {
    name: 'NominationsTemplate',
    components: {
      SearchHistory,
      NominationsList,
      Search
    },
    data() {
      return {
        sheet: false
      }
    },
    created: function () {
      if (this.nominatedMovies.length > 0) {
        this.sheet = !this.sheet
      }
    },
    methods: {
      ...mapActions({
        addNominatedMovie: 'addNominatedMovie',
        removeNominatedMovie: 'removeNominatedMovie',
        setNominatedMovies: 'setNominatedMovie',
        removeNominations: 'removeNominations'
      }),
      addNomination(value) {
        this.sheet = !this.sheet
        this.addNominatedMovie(value)
        localStorage.setItem('nominatedMovies', JSON.stringify(this.nominatedMovies))
      },
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
.paddingClose{
  padding-bottom:20px;
}
</style>