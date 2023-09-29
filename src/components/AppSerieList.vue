<script>
import { state } from '../state.js';
import AppSerieCard from './AppSerieCard.vue';

export default {
    name: 'AppFilmList',
    data() {

        return {
            state,
        }
    },

    components: {
        AppSerieCard
    },
    methods: {
        nextSerie() {

            if (this.state.pageSerie >= 1 && this.state.pageSerie < this.state.totalPageSerie) {
                this.state.pageSerie++
                const urlSerie = this.state.urlSeriesBase + this.state.searched + '&page=' + this.state.pageSerie;
                this.state.fetchSeriesByName(urlSerie)
            }


        },

        prevSerie() {

            if (this.state.pageSerie <= this.state.totalPageSerie && this.state.pageSerie > 1) {
                this.state.pageSerie--
                const urlSerie = this.state.urlSeriesBase + this.state.searched + '&page=' + this.state.pageSerie;
                this.state.fetchSeriesByName(urlSerie)
            }


        }
    },
}
</script>

<template>
    <div class="d-flex justify-content-between align-items-center mt-5">
        <h2>Serie TV</h2>
        <div>
            <button @click="prevSerie">Prev</button>
            <button @click="nextSerie">Next</button>
        </div>
    </div>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">

        <AppSerieCard :serie="serie" v-for="serie in this.state.series" />

    </div>
</template>

<style lang="scss" scoped></style>