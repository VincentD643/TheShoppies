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

export default {
  name: 'App',
  components: {
    Drawer
  },
  data: () => ({
    //
  }),
  methods: {
  }
};
</script>