<template>
  <v-container>
    <div  class="centerList" v-if="nominatedMovies.length == 0">
      <v-img class="centerImageNomination" src="../../assets/undraw_Add_notes_re_ln36.svg" height="15%" width="15%"></v-img>
      <v-img src="../../assets/EmptyNominationList.svg"></v-img>
    </div>
    <SearchResults class="centerNominations" v-on:RemoveNomination="removeNomination" :isNomination="true" :moviesProps="nominatedMovies"/>
     <v-speed-dial
      fixed
      right 
      bottom
      direction="top"
      transition="scale-transition"
      :open-on-hover="hover"
    >
      <template v-slot:activator>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bind="attrs"
              v-model="fab"
              color="blue darken-2"
              dark
              fab
            >
              <v-icon v-if="fab">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <span>Share/Delete</span>
        </v-tooltip>
      </template>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bind="attrs"
              @click="share()" 
              fab 
              dark 
              small 
              color="primary">
                <v-icon dark>mdi-share-outline</v-icon>
              </v-btn>
          </template>
          <span>Share</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="nominatedMovies.length != 0"
              v-on="on"
              v-bind="attrs"
              @click="removeAllNominations()"
              fab
              dark
              small
              color="red"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <span>Delete</span>
        </v-tooltip>
    </v-speed-dial>
  </v-container>
</template>

<script>
import SearchResults from './SearchResults'
  export default {
    name: 'NominationsList',
    props: ['nominatedMovies'],
    components: {
      SearchResults,
    },
    data() {
      return {
        fab: false
      }
    },
    methods: {
        removeNomination(value) {
            this.$emit('RemoveNomination',value)
        },
        removeAllNominations() {
          this.$emit('RemoveAllNominations')
        },
        share(){
          let nominatedMoviesJson = JSON.stringify(this.nominatedMovies);
          //console.log(location.protocol + '//' + location.hostname) might need this en prod
      
          let base64 = location.protocol + '//' + location.host + '/Nominations/' + btoa(unescape(encodeURIComponent(nominatedMoviesJson)))
          navigator.clipboard.writeText(base64).then(function() {
            console.log('copy success')
          }, function() {
            console.log('copy failed')
          });
          
        }
    }
  }
</script>
<style>
.centerList{
  padding-top:5%;
  margin:auto;
}
.centerNominations{
  margin:auto;
  padding-left:4%
}
.centerImageNomination{
  margin: auto;
}
</style>
