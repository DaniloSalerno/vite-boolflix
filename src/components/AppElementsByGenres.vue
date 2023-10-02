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
    <h1 class="text-center text-white">VISUALIZZARE SERIE O FILM APPARTENENTI AL GENERE CLICCATO </h1>
    <div v-for="movie in this.state.movieAboutGenres.results" class="text-white text-center">
        <div>Titolo: {{ movie.original_title }}</div>

    </div>
</template>

<style lang="scss" scoped></style>