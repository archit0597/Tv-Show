<template>
    <div id="prodTeam">
        <v-row>
            <v-col sm="12" md="12" lg="12">
                <v-card>
                     <v-tabs grow>
                        <v-tab>Cast</v-tab>
                        <v-tab>Crew</v-tab>
                        <v-tab>Episodes</v-tab>
                        <v-tab-item>
                            <v-container>
                                    <app-cast-team :castDetails="cast"></app-cast-team>
                            </v-container>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-container >
                                    <app-crew-team :crewDetails="crew"></app-crew-team>
                                </v-container>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <app-episode :seasons="seasons" :episodes="episodes"></app-episode>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import AppCastTeam from '@/components/creators/CastTeam.vue';
import AppCrewTeam from '@/components/creators/CrewTeam.vue';
import AppEpisode from '@/components/creators/Episodes.vue';
import { getShowById } from '@/services/service.js';
export default {
    props:['id'],
    data(){
        return{
            showId: this.id,
            productionTeam:{}, 
            crew: [],
            cast: [],
            seasons: [],
            episodes: [],
        }
    },
    components:{
        AppCastTeam,
        AppCrewTeam,
        AppEpisode
    },
    methods:{
        async init(){ 
            await getShowById(this.showId).then(response => {
                this.productionTeam = response.data;
            }).catch(error => alert(`${error}`));
            this.getData();
        },
        getData(){
            this.crew = this.productionTeam._embedded.crew;
            this.cast = this.productionTeam._embedded.cast;
            this.seasons = this.productionTeam._embedded.seasons;
            this.episodes = this.productionTeam._embedded.episodes;
        }
    },
    created(){
        this.init();
    }
}
</script>