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
      <v-btn
        class="mt-6"
        text
        color="red"
        @click="sheet = !sheet"
      >
        close
      </v-btn>
      <NominationsList v-on:RemoveNomination="removeNomination"/>
      </v-sheet>
    </v-bottom-sheet>
    <v-btn @click="sheet = !sheet" fab dark large color="primary" fixed right bottom>
        <v-icon dark>mdi-star</v-icon>
    </v-btn>
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
    
    methods: {
      ...mapActions({
        addNominatedMovie: 'addNominatedMovie',
        addWatchLaterMovie: 'addWatchLaterMovie',
        removeNominatedMovie: 'removeNominatedMovie'
      }),
      addNomination(value) {
        this.sheet = !this.sheet
        this.addNominatedMovie(value)
      },
      addWatchLater(value) {
        this.addWatchLaterMovie(value)
      },
      removeNomination(value) {
        this.removeNominatedMovie(value)
      }
    },
    computed: {
      ...mapGetters([
        'movieResultsHistory',
        'movieResults',
        'nbOfPages'
      ])
    },
  }
</script>
