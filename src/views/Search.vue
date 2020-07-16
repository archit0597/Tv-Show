<template>
    <div class="search">
        <v-container>
            <v-text-field style="margin-top:80px" outlined rounded @input="searchShow" class="customInput" 
            solo label="Search Shows" v-model="searchQuery"></v-text-field>
        </v-container>
        <v-row v-if="searchTrigger">
            <v-col v-for="item in searchResults" :key="item.id" class="ml-5" cols="auto">
                <app-show-card :show="item.show" class="zoom"></app-show-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-container>
                <v-card class="mx-auto" elevation=3>
                    <v-card-text>No Results Found !!</v-card-text>
                </v-card>
            </v-container>
        </v-row>
    </div>
</template>
<script>
import { getShowsByName } from '@/services/service.js';
import AppShowCard from '@/components/home-components/ShowCard.vue';

export default {
    data(){
        return{
            searchQuery: '',
            searchResults: [],
            searchTrigger: false
        }
    },
    methods:{
        searchShow(){
            this.searchTrigger = true;
            this.searchResults = [];
            getShowsByName(this.searchQuery).then(response => {
                if(response.data.length==0){
                    this.searchTrigger = false;
                }
                this.searchResults = response.data;
            }).catch(err => alert(`${err}`)); 
        }
    },
    components:{
        AppShowCard
    },
}
</script>
<style scoped>
.zoom {
  transition: transform .1s;
}

.zoom:hover {
  transform: scale(1.05);
}
</style>