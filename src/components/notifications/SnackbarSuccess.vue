<template>
  <v-container>
    <v-snackbar
      color="success"
      :value="success"
    >
      {{ success.message }}
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
        'success'
      ])
    },
  }
</script>
<style>
.paddingArrow{
  padding-top:5%;

}
</style>