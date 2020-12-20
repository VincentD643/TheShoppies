<template>
  <v-container>
    <div v-if="movieResultsHistory.length != 0">
        <SearchResults v-on:AddNomination="addNomination" :moviesProps="movieResultsHistory" />
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
import SearchResults from './SearchResults'
    export default {
    name: 'SearchHistory',
    props: ['movieResultsHistory'],
    components: {
        SearchResults
    },
    data() {
      return {
      }
    },
    methods:{
        addNomination(value) {
          this.$emit('AddNomination', value)
        }
    }
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
