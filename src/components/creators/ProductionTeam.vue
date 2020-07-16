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
    </div>
</template>
<script>
import { getShowById } from '@/services/service.js';
import AppCastTeam from '@/components/creators/CastTeam.vue';
import AppCrewTeam from '@/components/creators/CrewTeam.vue';
export default {
    props:['id'],
    data(){
        return{
            showId: this.id,
            productionTeam: {},
            slide: null,
            crew: [],
            cast: [],
            crewSheet: false,
            castSheet: false
        }
    },
    components:{
        AppCastTeam,
        AppCrewTeam
    },
    methods:{
        async init(){
            await getShowById(this.showId).then(response => {
                this.productionTeam = response.data;
            }).catch(err => alert(`${err}`));
            this.getData();
        },
        getData(){
            this.crew = this.productionTeam._embedded.crew;
            this.cast = this.productionTeam._embedded.cast;
        }
    },
    created(){
        this.init();
    }
}
</script>