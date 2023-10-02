<script>

import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import AppFilmSection from './components/AppFilmSection.vue';
import AppSerieSection from './components/AppSerieSection.vue';
import AppBanner from './components/AppBanner.vue';
import AppElementsByGenres from './components/AppElementsByGenres.vue';



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
    AppBanner,
    AppElementsByGenres
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

    <div v-if="this.state.whatView == 'listByName'">
      <AppFilmSection />
      <AppSerieSection />
    </div>

    <div v-else-if="this.state.whatView == 'genres'">
      <AppElementsByGenres />

    </div>



    <div v-else-if="this.state.whatView == 'banner'">
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
