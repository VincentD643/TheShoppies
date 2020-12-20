<template>
  <v-container>
    <div>
        <v-row>
            <v-col cols="12" sm="2" md="2" v-bind:key="movie.imdbID" v-for="movie in moviesProps" >
               <v-card>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline">
                            {{movie.Title}}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{movie.Type}}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{movie.Year}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-card-text class="imageSize">
                    <v-img v-if="movie.Poster != 'N/A'"
                        height="350px"
                        width="250px"
                        :src="movie.Poster"
                    ></v-img>
                    <v-img v-else src="../../assets/Missing_Poster.svg">
                    </v-img>
                </v-card-text>
                <v-card-actions>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                @click="addNomination(movie)"
                                v-bind="attrs"
                                v-on="on"
                                icon
                                color="pink"
                                >
                                <v-icon>mdi-star-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Add to Nominations</span>
                    </v-tooltip>
                     <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                @click="addWatchLater(movie)"
                                v-bind="attrs"
                                v-on="on"
                                icon
                                color="pink"
                                >
                                <v-icon>mdi-plus-circle</v-icon>
                            </v-btn>
                        </template>
                        <span>Add to Watch Later</span>
                    </v-tooltip>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
    </div>
    
  </v-container>
</template>

<script>
export default {
    name: 'SearchHistory',
    props: ['moviesProps'],
    data() {
      return {
        
      }
    },
    methods: {
        created: function () {
            console.log(this.movieResultsHistory)
        },
        addWatchLater(movie) {
            this.$emit('AddWatchLater', movie )
        },
        addNomination(movie) {
            this.$emit('AddNomination', movie)
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
