<template>
<v-row justify="center">
      <v-col cols="12">
        <v-row align="center">
          <v-img v-if="selectedShow.image!=null" :src="selectedShow.image.original"></v-img>
          <v-overlay style="margin-top:60px;margin-bottom:36px">
            <v-row class="fill-height white--text font-weight-bold" align="center" justify="center">
              <v-col sm="6">
                <div class="display-2">{{selectedShow.name}}</div>
                <div class="caption mt-4" v-html="selectedShow.summary"></div>
                <div v-if="selectedShow.rating" class="headline ma-3">
                  Rating : {{selectedShow.rating.average}}
                  <v-icon dark>mdi-spin</v-icon>
                </div>
                <v-chip-group column>
                  <v-chip v-for="genre in selectedShow.genres" :key="genre">
                    <v-icon small left>mdi-bookmark</v-icon>
                    {{ genre }}
                  </v-chip>
                </v-chip-group>
                 <app-production-team :id="selectedShow.id"></app-production-team>
              </v-col>
            </v-row>
          </v-overlay>
        </v-row>
      </v-col>
    </v-row>
</template>
<script>
import AppProductionTeam from '@/components/creators/ProductionTeam.vue';
export default {
  data(){
    return{
      selectedShow: {}
    }
  },
  components:{
    AppProductionTeam
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