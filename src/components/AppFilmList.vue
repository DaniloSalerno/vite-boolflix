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
        nextFilm() {

            if (this.state.pageMovie >= 1 && this.state.pageMovie < this.state.totalPageMovie) {
                this.state.pageMovie++
                const urlMovie = this.state.urlMovieBase + this.state.searched + '&page=' + this.state.pageMovie;
                this.state.fetchMovieByName(urlMovie)
            }


        },

        prevFilm() {

            if (this.state.pageMovie <= this.state.totalPageMovie && this.state.pageMovie > 1) {
                this.state.pageMovie--
                const urlMovie = this.state.urlMovieBase + this.state.searched + '&page=' + this.state.pageMovie;
                this.state.fetchMovieByName(urlMovie)
            }


        }
    },
}
</script>

<template>
    <div class="d-flex justify-content-between align-items-center mt-1">
        <h2>Film</h2>
        <div>
            <button @click="prevFilm">Prev</button>
            <button @click="nextFilm">Next</button>
        </div>
    </div>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">

        <AppFilmCard :movie="movie" v-for="movie in this.state.movies" />

    </div>
</template>

<style lang="scss" scoped></style>