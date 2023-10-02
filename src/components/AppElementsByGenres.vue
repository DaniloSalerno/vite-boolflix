<script>
import { state } from '../state.js'

export default {
    name: 'AppElementsByGenres',
    data() {
        return {
            state
        }
    },
    methods: {
        nextFilmsByGenres() {

            if (this.state.pageMovieByGenres >= 1 && this.state.pageMovieByGenres < this.state.totalPageMovieByGenres) {
                this.state.pageMovieByGenres++
                this.state.fetchMovieAboutGenres(this.state.idGenresMovie, this.state.pageMovieByGenres)

            }


        },

        prevFilmsByGenres() {

            if (this.state.pageMovieByGenres <= this.state.totalPageMovieByGenres && this.state.pageMovieByGenres > 1) {
                this.state.pageMovieByGenres--
                this.state.fetchMovieAboutGenres(this.state.idGenresMovie, this.state.pageMovieByGenres)
            }


        },
        nextSeriesByGenres() {

            if (this.state.pageSerieByGenres >= 1 && this.state.pageSerieByGenres < this.state.totalPageSerieByGenres) {
                this.state.pageSerieByGenres++
                this.state.fetchSerieAboutGenres(this.state.idGenresSerie, this.state.pageSerieByGenres)

            }


        },

        prevSeriesByGenres() {

            if (this.state.pageSerieByGenres <= this.state.totalPageSerieByGenres && this.state.pageSerieByGenres > 1) {
                this.state.pageSerieByGenres--
                this.state.fetchSerieAboutGenres(this.state.idGenresSerie, this.state.pageSerieByGenres)
            }


        }
    }
}
</script>

<template>
    <div v-show="this.state.movieAboutGenres.length !== 0">
        <div class="container d-flex justify-content-between align-items-center mt-1">
            <h2>Film</h2>
            <div class="d-flex gap-2">
                <button @click="prevFilmsByGenres" v-show="this.state.pageMovieByGenres !== 1">{{
                    this.state.pageMovieByGenres
                    !=
                    1 ?
                    this.state.pageMovieByGenres
                    - 1 : '' }}</button>
                <div class="text-white">
                    Pagina {{ this.state.pageMovieByGenres }} di {{ this.state.totalPageMovieByGenres }}
                </div>
                <button @click="nextFilmsByGenres"
                    v-show="this.state.totalPageMovieByGenres !== this.state.pageMovieByGenres">{{
                        this.state.pageMovieByGenres +
                        1 }}</button>
            </div>
        </div>

        <div>
            <h1 class="text-center text-white">Film</h1>
            <div v-for="movie in this.state.movieAboutGenres.results" class="text-white text-center">
                <div>Titolo: {{ movie.original_title }}</div>
            </div>
        </div>
    </div>









    <div v-show="this.state.serieAboutGenres.length !== 0">

        <div class="container d-flex justify-content-between align-items-center mt-1">
            <h2>Film</h2>
            <div class="d-flex gap-2">
                <button @click="prevSeriesByGenres" v-show="this.state.pageSerieByGenres !== 1">{{
                    this.state.pageSerieByGenres
                    !=
                    1 ?
                    this.state.pageSerieByGenres
                    - 1 : '' }}</button>
                <div class="text-white">
                    Pagina {{ this.state.pageSerieByGenres }} di {{ this.state.totalPageSerieByGenres }}
                </div>
                <button @click="nextSeriesByGenres"
                    v-show="this.state.totalPageSerieByGenres !== this.state.pageSerieByGenres">{{
                        this.state.pageSerieByGenres +
                        1 }}</button>
            </div>
        </div>


        <div>
            <h1 class="text-center text-white">SERIE</h1>
            <div v-for="serie in this.state.serieAboutGenres.results" class="text-white text-center">
                <div>Titolo: {{ serie.original_name }}</div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
}
</style>