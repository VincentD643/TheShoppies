<template>
  <v-container>
    <v-text-field
        v-model="searchTerm"
        label="Search"
        clearable
    ></v-text-field>
    <SearchResults v-on:AddNomination="addNomination" :moviesProps="movieResults" />
    <!--
    <v-bottom-sheet inset persistent hide-overlay :value="showBottomSheet">
    </v-bottom-sheet>
    -->
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
import SearchResults from './SearchResults'
import NominationsList from './NominationList'
import { debounce } from 'debounce'
  export default {
    name: 'Search',
    components: {
        SearchResults,
        NominationsList
    },
    data() {
      return {
        searchTerm: "",
        sheet: false,
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
            addNominatedMovie: 'addNominatedMovie',
            addWatchLaterMovie: 'addWatchLaterMovie',
            removeNominatedMovie: 'removeNominatedMovie'
        }),
        debounceSearch: debounce(function () {
            this.getSearchResults(this.searchTerm.trim())
        }, 500),
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
      'movieResults',
    ])
  },
  }
</script>
<style>
</style>
