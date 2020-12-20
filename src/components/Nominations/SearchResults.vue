<template>
  <v-container>
    <div>
        <v-row>
            <v-col cols="12" sm="5" md="2" lg="2" v-bind:key="movie.imdbID" v-for="movie in moviesProps" >
               <v-card>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-tooltip v-if="!isNomination" top>
                            <template v-slot:activator="{ on, attrs }">
                               <v-list-item-title v-on="on" v-bind="attrs" class="headline">
                                    {{movie.Title}}
                                </v-list-item-title>
                            </template>
                            <span> {{movie.Title}}</span>
                        </v-tooltip>
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
                    <v-tooltip v-if="!isNomination" bottom>
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
                    <v-tooltip v-else bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                @click="removeNomination(movie)"
                                v-bind="attrs"
                                v-on="on"
                                icon
                                color="pink"
                                >
                                <v-icon>mdi-star-minus</v-icon>
                            </v-btn>
                        </template>
                        <span>Remove Nominations</span>
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
    props: ['moviesProps', 'isNomination'],
    data() {
      return {
      }
    },
    methods: {
        addNomination(movie) {
            this.$emit('AddNomination', movie)
        },
        removeNomination(movie) {
            this.$emit('RemoveNomination', movie)
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
