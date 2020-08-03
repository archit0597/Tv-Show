<template>
    <div id="cast">        
        <v-list style="height:50vh;overflow-y:auto">
            <v-list-item v-for="item in castDetails" :key="item.title">
                <v-list-item-avatar>
                    <v-img v-if="item.person.image!=null" :src="item.person.image.medium" contain />
                    <v-img v-else src='@/assets/image-not-found.jpeg' contain></v-img>      
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="item.person.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content class="hidden-xs-only">
                    <v-list-item-title v-text="item.character.name"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
export default {
    props:['castDetails'],
    data(){
        return{
            cast : this.castDetails,    
        }
    }
}
</script>