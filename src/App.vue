<template>
  <v-app>
    <v-layout
      wrap
      style="height: 200px;"
    >
      <v-app-bar
        app clipped-left
      >
        <button @click="$router.push({name: 'Home'})">
          <v-toolbar-title>The Shoppies</v-toolbar-title>
        </button>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view/>
          <!--<TheErrorSnackbar/>
          <TheSuccessSnackbar/>-->
        </v-container>
        <Drawer/>
      </v-content>
      <!--<TheLoadingDialog/>-->

    </v-layout>
  </v-app>
</template>

<script>
import Drawer from './components/menus/Drawer';
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Drawer
  },
  data: () => ({
    //
  }),
  created: function () {
    this.localStorage()
    this.sharing()
  },
  methods: {
     ...mapActions({
        setNominatedMovies: 'setNominatedMovies'
      }),
     localStorage() {
        let tempLocalStorage = localStorage.getItem('nominatedMovies')
        if (tempLocalStorage) {
          this.setNominatedMovies(JSON.parse(tempLocalStorage))
        }
      },
      sharing() {
        if (this.$route.params.nominationsList) {
          let nominatedMoviesJson = atob(this.$route.params.nominationsList)
          this.setNominatedMovies(JSON.parse(nominatedMoviesJson))
        }
      },
  }
};
</script>