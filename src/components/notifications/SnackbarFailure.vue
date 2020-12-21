<template>
  <v-container>
    <v-snackbar
      color="error"
      :value="error"
    >
      {{ error.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'Snackbar',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'error'
      ])
    },
  }
</script>
<style>
.paddingArrow{
  padding-top:5%;

}
</style>