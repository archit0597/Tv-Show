<template>
    <div id="crew">
        <v-list style="height:50vh;overflow-y:auto">
            <v-list-item v-for="item in crew" :key="item.title">
                <v-list-item-avatar class="hidden-xs-only">
                    <v-img v-if="item.person.image!=null" :src="item.person.image.medium" contain />
                    <v-img v-else src='@/assets/image-not-found.jpeg' contain></v-img>      
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="item.person.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-title v-text="item.type"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    props:['crewDetails'],
    data(){
        return{
            crew: this.crewDetails,
        }
    }
}
</script>