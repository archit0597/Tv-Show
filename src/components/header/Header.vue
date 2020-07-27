<template>
    <v-app-bar app color="dark" absolute>
        <v-toolbar-title v-if="$route.name==`Home`"><strong>Binge</strong></v-toolbar-title>
        <v-btn v-else class="ma-2" color="blue-grey" dark @click="$router.push({path: '/'})">
          <v-icon dark left>mdi-arrow-left</v-icon>Binge
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="search" color="blue-grey" style="text-decoration: none"><strong>Search</strong></v-btn>
    </v-app-bar>
</template>
<script>
export default {
    methods:{
        search(){
            this.$router.push({path:'/search'});
        }
    }
}
</script>