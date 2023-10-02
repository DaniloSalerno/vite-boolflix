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
        <div class="prev_next d-flex gap-2">
            <button @click="prevFilm" v-show="this.state.pageMovie !== 1">{{ this.state.pageMovie != 1 ?
                this.state.pageMovie
                - 1 : '' }}</button>
            <div class="text-white">
                Pagina {{ this.state.pageMovie }} di {{ this.state.totalPageMovie }}
            </div>
            <button @click="nextFilm" v-show="this.state.totalPageMovie !== this.state.pageMovie">{{ this.state.pageMovie +
                1 }}</button>
        </div>
    </div>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">

        <AppFilmCard :movie="movie" v-for="movie in this.state.movies" />

    </div>
</template>

<style lang="scss" scoped></style>