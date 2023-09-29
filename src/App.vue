<script>

import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import AppFilmSection from './components/AppFilmSection.vue';
import AppSerieSection from './components/AppSerieSection.vue';
import AppBanner from './components/AppBanner.vue';


export default {
  name: 'App',
  data() {
    return {
      state,

    }
  },
  components: {
    AppHeader,
    AppFilmSection,
    AppSerieSection,
    AppBanner
  },
  methods: {

  },
  created() {
  }
}
</script>

<template>
  <AppHeader />

  <main>

    <div v-if="this.state.series.length || this.state.movies.length > 0">
      <AppFilmSection />
      <AppSerieSection />
    </div>

    <div v-else>
      <AppBanner />
    </div>

  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 70px);
  background-color: black;
  overflow-y: auto;
}
</style>
