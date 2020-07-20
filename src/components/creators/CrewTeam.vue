<template>
    <div id="crew">
        <v-banner single-line left>
            <v-avatar v-if="crew.person.image!=null" style="float:left;"><v-img :src="crew.person.image.medium" alt="NA" /></v-avatar>
            <v-avatar v-else style="float:left;"><v-icon>mdi-human-greeting</v-icon></v-avatar>
            <span style="float:left;">{{crew.person.name}}</span>
            <template v-slot:actions>
                <a style="text-decoration: none" :href="crew.person.url" target="_blank"> <span class="font-weight-bold">{{crew.type}}</span><v-icon color="blue-grey" size="36">mdi-launch</v-icon></a>    
            </template>
        </v-banner>
    </div>
</template>

<script>
export default {
    props:['crewDetails'],
    data(){
        return{
            crew: this.crewDetails
        }
    }
}
</script>