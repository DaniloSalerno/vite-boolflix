<script>
import { state } from '../state.js'

export default {
    name: 'AppElementsByGenres',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div v-show="this.state.movieAboutGenres.length !== 0">
        <h1 class="text-center text-white">Film</h1>
        <div v-for="movie in this.state.movieAboutGenres.results" class="text-white text-center">
            <div>Titolo: {{ movie.original_title }}</div>

        </div>
    </div>

    <div v-show="this.state.serieAboutGenres.length !== 0">
        <h1 class="text-center text-white">SERIE</h1>
        <div v-for="serie in this.state.serieAboutGenres.results" class="text-white text-center">
            <div>Titolo: {{ serie.original_name }}</div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>