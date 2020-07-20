<template>
    <div id="cast">
        <v-banner single-line>
            <v-avatar v-if="cast.person.image!=null" style="float:left;"><v-img :src="cast.person.image.medium" alt="NA" /></v-avatar>
            <v-avatar v-else style="float:left;"><v-icon>mdi-human-greeting</v-icon></v-avatar>
            <span style="float:left;">{{cast.person.name}}</span>
            <template v-slot:actions>
                <a style="text-decoration: none" :href="cast.person.url" target="_blank"><span class="font-weight-bold">{{cast.character.name}}</span><v-icon color="primary" size="36">mdi-launch</v-icon></a>    
            </template>
        </v-banner>
    </div>
</template>
<script>
export default {
    props:['castDetails'],
    data(){
        return{
            cast : this.castDetails
        }
    }
}
</script>