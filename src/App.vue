<template>
  <v-app >
    <div class="app-vue">
      <app-header />
      <router-view/>
      <app-loading></app-loading>
    </div>
  </v-app>
</template>

<script>
import header from './components/header.vue'
import loading from './components/loading.vue'
export default {
  name: 'App',
  components: {
    appHeader : header,
    appLoading : loading
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>

  .app-vue{ 
    background: rgba(243,245,248,255) !important;
    height: 100%;
  }

</style>


