<template>
      <v-navigation-drawer
        app
        permanent
        clipped
        expand-on-hover
      >
        <v-list>
            <div  v-bind:key="item.id" v-for="item in items">
            <v-list-item @click="routeTo(item)">
                <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
        </v-list>
      </v-navigation-drawer>
</template>
<script>
export default {
  name: 'Drawer',
  components: {
    
  },
  data () {
    return {
      drawer: true,
      locked: false,
      items: [
        { id: 1, title: 'Home', icon: 'mdi-home', link: 'Home' },
        { id: 2, title: 'Nominations', icon: 'mdi-playlist-star', link: 'Nominations' }
      ]
    }
  },
  computed: {
  },
  methods: {
    routeTo (item) {
        if (this.$router.currentRoute.name != item.title) {
            this.$router.push({ name: item.title })
        }
    }
  }
}
</script>

<style>
</style>