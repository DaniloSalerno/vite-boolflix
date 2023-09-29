<script>
import { state } from '../state.js';
import 'bootstrap';
import AppOffcanvasMenu from './AppOffcanvasMenu.vue';


export default {
    name: 'AppHeader',
    data() {

        return {
            state,
        }
    },
    components: {
        AppOffcanvasMenu
    },
    methods: {
        searchFilmSeries() {
            const urlMovie = this.state.urlMovieBase + this.state.searched;
            this.state.fetchMovieByName(urlMovie)
        },

        searchSeriesByName() {
            const urlSeries = this.state.urlSeriesBase + this.state.searched;
            this.state.fetchSeriesByName(urlSeries)
        }
    },
    created() {
    }
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center">

        <div class="d-flex align-items-center">

            <AppOffcanvasMenu />

            <div id="logo">

                <img width="125" src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo">

            </div>

        </div>

        <div id="search" class="d-flex align-items-center p-2 gap-1">

            <input type="search" name="name" id="name" v-model="this.state.searched" placeholder="Cerca">

            <button class="btn bg-transparent p-0" @click="searchFilmSeries(); searchSeriesByName()">

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>

            </button>

            <button class="btn bg-transparent py-0 ps-3 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">

                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                    <path
                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                </svg>

            </button>

            <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                    <a class="dropdown-item" href="#">Impostazioni</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">Esci</a>
                </li>
            </ul>


        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;

    background-color: black;
    padding: 0.5rem 0;
}

svg {
    filter: invert(100%) sepia(11%) saturate(7500%) hue-rotate(169deg) brightness(112%) contrast(111%);
}
</style>