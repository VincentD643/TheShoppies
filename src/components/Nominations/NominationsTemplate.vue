<template>
  <v-container>
    <v-tabs fixed-tabs centered>
      <v-tab>
        Nominations
      </v-tab>
      <v-tab-item>
        <Search/>
      </v-tab-item>
      <v-tab>
        Search History
      </v-tab>
        <v-tab-item>
        <SearchHistory/>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import SearchHistory from './SearchHistory'
import Search from './Search'
  export default {
    name: 'NominationsTemplate',
    components: {
      SearchHistory,
      Search
    },
    data() {
      return {
        
      }
    }
  }
</script>
