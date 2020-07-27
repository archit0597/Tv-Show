<template>
            <v-sheet align="center" color="blue-grey" height="45%">  
                <v-carousel cycle height="100%">
                    <v-carousel-item v-for="(show, i) in showList" :key="i" style="cursor:pointer" 
                    @click="showDetails(show)">
                        <v-hover>
                            <template v-slot:default="{ hover }">
                            <v-card width="300" height="430">
                            <v-img v-if="show.image!=null" :src="show.image.medium" contain/>
                            <v-fade-transition>
                                <v-overlay v-if="hover" absolute color="#036358">
                                    <div class="display-2">{{show.language}}</div>
                                    <div class="display-2">{{show.rating.average}}<v-icon size="32">mdi-star</v-icon></div>
                                </v-overlay>
                            </v-fade-transition>
                            </v-card>
                            </template>
                        </v-hover>
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