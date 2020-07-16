<template>
    <div id="slider">
        <v-sheet height="350">
            <v-icon>mdi-dots-vertical</v-icon>
            <span class="font-weight-bold">{{genre}}</span>        
            <v-slide-group v-model="slide" show-arrows>
                <v-slide-item v-for="show in genreWiseList" :key="show.id" class='zoom mx-auto'>
                    <app-show-card :show="show"></app-show-card>    
                </v-slide-item>
            </v-slide-group>
        </v-sheet>        
    </div>
</template>
<script>
import AppShowCard from '@/components/home-components/ShowCard.vue';
export default {
    props:{
        list: Array,
        genre: String
    },
    data(){
        return{
            showList: this.list,
            showGenre: this.genre,
            genreWiseList: [],
            slide: null
        }
    },
    components:{
        AppShowCard
    },
    methods:{
        filterList(){
            this.showList.forEach(element => {
                if(element.genres.includes(this.showGenre)){
                    this.genreWiseList.push(element);
                }
            });
            this.genreWiseList.sort();
        }
    },
    created(){
        this.filterList();
    }
}
</script>
<style>
.zoom {
  transition: transform .1s;
}

.zoom:hover {
  transform: scale(1.05);
}
</style>