<template>
  <v-app>
    <app-header/>
    <keep-alive>
      <v-main>
        <router-view/>
      </v-main>
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
  }
};
</script>
