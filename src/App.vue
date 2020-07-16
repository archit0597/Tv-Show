<template>
  <v-app>
    <app-header/>
    <keep-alive>
      <v-content>
        <router-view/>
      </v-content>
    </keep-alive>
    <app-footer/>
  </v-app>
</template>
<script>
import AppHeader from './components/header/Header.vue';
import AppFooter from './components/footer/Footer.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter
  },

  data: () => ({
    //
  }),
};
</script>
