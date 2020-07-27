<template>
    <div id="card">
        <v-hover v-slot:default="{ hover }">
            <v-card shaped width="70%" height="90%" :elevation="hover ? 12 : 2" @click="showDetails(currentShow)">
                <v-container>
                    <v-row justify="space-between">
                        <v-col cols="auto">
                            <v-img v-if="currentShow.image!=null" class="white--text align-end" contain height="200" 
                            style="border-top-left-radius:10px;border-bottom-right-radius:10px;" :src="currentShow.image.medium">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular> 
                                    </v-row>
                                </template>
                            </v-img>
                            <v-img v-else :src="require('@/assets/image-not-found.jpeg')" contain height="200"
                                class="white--text align-end"
                                style="border-top-left-radius:10px;border-bottom-right-radius:10px;">
                            </v-img>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-card-subtitle style="cursor:pointer">
                            <div v-if="currentShow.rating.average!=null">{{currentShow.rating.average}}<v-icon size="15">mdi-star</v-icon></div>
                            <div>{{currentShow.name}}</div>
                        </v-card-subtitle>
                    </v-row>
                </v-container>
            </v-card>
        </v-hover>
    </div>
</template>
<script>
export default {
    props:{
        show: {}
    },
    data(){
        return{
            currentShow : this.show
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