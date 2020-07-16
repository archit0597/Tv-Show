<template>
  <div class="home">
    <div class="text-center progress" v-if="allShowList.length==0">
      <v-progress-circular :size="70" :width="7" color="blue-grey" indeterminate></v-progress-circular>
    </div>
    <app-hits v-if="allShowList.length" :list="allShowList"></app-hits>
    <div v-for="(genre,index) in genreList" :key=index>
      <app-slider :list="allShowList" :genre="genre"></app-slider>
    </div>
  </div>
</template>
<script>
import AppHits from '@/components/home-components/HitShows.vue';
import AppSlider from '@/components/home-components/Slider.vue';
import { getAllShows } from '@/services/service.js';
export default {
  name: 'Home',
  components:{
    AppSlider,
    AppHits
  },
  data(){
    return{
      allShowList : [],
      genreList: []
    }
  },
  created(){
    this.init();  
  },
  methods:{
    async init(){
      try{
        const thePromiseData = await getAllShows();
        this.allShowList = thePromiseData.data;
      }
      catch(err){
        console.log(err);
      }
      this.getGenres();
    },
    getGenres(){
      this.allShowList.forEach(element => {
        element.genres.forEach(genre => {
          if(!this.genreList.includes(genre)){
            this.genreList.push(genre);
          }
        });
        this.genreList.sort();
      });
    }
  }
}
</script>
<style scoped>
.progress{
    position:fixed;
    top: 50%;
    left: 50%;
    width:30em;
    height:18em;
    margin-top: -9em;
    margin-left: -15em;
}
</style>