<script>
import { state } from '../state.js';
import AppFilmCard from './AppFilmCard.vue';

export default {
    name: 'AppFilmList',
    data() {

        return {
            state,
        }
    },

    components: {
        AppFilmCard
    },
    methods: {
    },
}
</script>

<template>
    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">

        <AppFilmCard :movie="movie" v-for="movie in this.state.movies" />

    </div>
</template>

<style lang="scss" scoped></style>