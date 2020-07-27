<template>
  <v-container justify="center">
    <v-row no-gutters justify="center">
      <v-col sm="12" md="6" lg="6" class="pa-2">
          <v-row>
            <v-col>
              <div class="display-2">{{selectedShow.name}}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="caption mt-3" v-html="selectedShow.summary"></div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div v-if="selectedShow.rating" class="headline">
                Rating : {{selectedShow.rating.average}}
                <v-icon dark>mdi-star</v-icon>
                <v-chip-group column>
                  <v-chip v-for="genre in selectedShow.genres" :key="genre">
                    <v-icon small left>mdi-bookmark</v-icon>
                    {{ genre }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-col>
          </v-row>
      </v-col>
      <v-col class="hidden-xs-only" md="3" lg="3" justify="center" align="center">
          <v-img v-if="selectedShow.image!=null" height="100%" width="50%" :src="selectedShow.image.original" contain></v-img>
          <v-img v-else height="75%" width="50%" src='@/assets/image-not-found.jpeg' contain></v-img>      
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="12" lg="12">
        <app-show-info :id="selectedShow.id"></app-show-info>
      </v-col>
    </v-row>          
  </v-container>
</template>
<script>
import AppShowInfo from '@/components/creators/ShowInfo.vue';

export default {
  data(){
    return{
      selectedShow: {}
    }
  },
  components:{
    AppShowInfo
  },
  methods:{
    init(){
      this.selectedShow = this.$store.getters.selectedShow;
    }
  },
  created(){
    this.init();
  }
}
</script>