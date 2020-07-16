<template>
    <v-sheet align="center" color="blue-grey" style="margin-top:65px">  
        <v-carousel cycle height="100%" >
            <v-carousel-item v-for="(show, i) in showList" :key="i" style="cursor:pointer" 
            @click="showDetails(show)">
                <v-card width="300" height="430">
                <v-img v-if="show.image!=null" :src="show.image.original"/>
                
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-sheet>
</template>
<script>
export default {
    props:['list'],
    data () {
    return {
        showList : this.list.sort((a,b) =>(b.rating.average-a.rating.average)).slice(0,5)
        }
    },
    methods:{
        showDetails(value){
            this.$store.dispatch('changeSelectedShow',value);
            this.$router.push({path:`/about/${value.id}`});
        }
    }
}
</script>