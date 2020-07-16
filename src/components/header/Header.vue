<template>
    <v-app-bar color="dark" fixed>
        <v-toolbar-title><router-link to="/" style="color:white;text-decoration: none"><strong>Binge</strong></router-link></v-toolbar-title>
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