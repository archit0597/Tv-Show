<template>
    <v-row justify="center">
      <v-expansion-panels focusable style="maxWidth:95%;height:50vh;overflow-y:auto">
        <v-expansion-panel v-for="season in season" :key="season.id" @click="getEpisode(season.number)">
          <v-expansion-panel-header>Season {{season.number}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
                <v-col v-for="item in seasonWiseList" :key="item.id">
                    <v-card class="mx-auto" shaped:true width="300"  elevation=2>
                        <a style="text-decoration: none" :href="item.url" target="_blank">
                            <span>{{item.number}}{{` `}}{{item.name}}</span>
                        </a>                    
                    </v-card>
                </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
</template>
<script>
export default {
    props:{
        episodes:{},
        seasons:{}
    },
    data(){
        return{
            episode: this.episodes,
            season: this.seasons,
            seasonWiseList: []
        }
    },
    methods:{
        getEpisode(value){
            this.seasonWiseList = [],
            this.episode.forEach(element => {
                if(element.season == value){
                    this.seasonWiseList.push(element);
                } 
            });
        }
    }
}
</script>