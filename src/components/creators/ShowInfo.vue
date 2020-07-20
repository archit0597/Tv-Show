<template>
    <div id="prodTeam">
        <v-bottom-sheet v-model="crewSheet" inset>
            <template v-slot:activator="{ on }">
                <v-btn dark v-on="on">Crew</v-btn>
            </template>
            <v-sheet class="text-center" max-height="auto" color="light-green lighten-4">
                <v-simple-table fixed-header height="300px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center headline font-weight-bold">Crew</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in crew" :key="item.id">
                                <td><app-crew-team :crewDetails="item"></app-crew-team></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-sheet>
        </v-bottom-sheet>


        <v-bottom-sheet v-model="castSheet" inset>
            <template v-slot:activator="{ on }">
                <v-btn dark v-on="on">Cast</v-btn>
            </template>
            <v-sheet class="text-center" max-height="auto" color="light-green lighten-4">
                <v-simple-table fixed-header height="300px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center headline font-weight-bold">Cast</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cast" :key="item.id">
                                <td><app-cast-team :castDetails="item"></app-cast-team></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-sheet>
        </v-bottom-sheet>

        <v-bottom-sheet v-model="episodeSheet" inset>
            <template v-slot:activator="{ on }">
                <v-btn dark v-on="on">Episode</v-btn>
            </template>
            <v-sheet class="text-center" max-height="auto" color="light-green lighten-4">
                <v-simple-table fixed-header height="300px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center headline font-weight-bold">Seasons</th>
                            </tr>
                        </thead>
                        <tbody>
                           <td><app-episode :seasons="seasons" :episodes="episodes"></app-episode></td>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-sheet>
        </v-bottom-sheet>
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
            slide: null,
            crew: [],
            cast: [],
            seasons: [],
            episodes: [],
            crewSheet: false,
            castSheet: false,
            episodeSheet: false
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
            });
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