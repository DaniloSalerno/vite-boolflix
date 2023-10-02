<script>
import 'bootstrap';
import { state } from '../state.js'


export default {
    name: 'AppOffcanvasMenu',
    /* props: {
        movie: Object,
        serie: Object
    }, */
    data() {
        return {
            state
        }
    },
    methods: {
        setGenresActiveMovie(i) {

            this.state.whatView = 'genres'

            for (let j = 0; j < this.state.genresActiveMovie.length; j++) {
                this.state.genresActiveMovie[j] = false

            }

            for (let j = 0; j < this.state.genresActiveSerie.length; j++) {
                this.state.genresActiveSerie[j] = false

            }

            this.state.genresActiveMovie[i] = true
        },

        setGenresActiveSerie(i) {

            this.state.whatView = 'genres'

            for (let j = 0; j < this.state.genresActiveSerie.length; j++) {
                this.state.genresActiveSerie[j] = false

            }

            for (let j = 0; j < this.state.genresActiveMovie.length; j++) {
                this.state.genresActiveMovie[j] = false

            }

            this.state.genresActiveSerie[i] = true
        },
        funzioneconnomedadefinire() {
        }
    },
    mounted() {
        this.state.fetchMovieGenres(this.state.urlMovieGenres)
        this.state.fetchSerieGenres(this.state.urlSerieGenres)
    }
}
</script>

<template>
    <div id="offcanvas">

        <button class="btn bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">

            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>

        </button>

        <div class="offcanvas offcanvas-start" data-bs-theme="dark" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">

            <div class="offcanvas-body p-0 px-3">

                <div class="user">

                    <div class=" d-flex align-items-center justify-content-between h-100">

                        <div class="d-flex align-items-center gap-2">
                            <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt="">
                            <div>Danilo</div>
                        </div>


                        <div>

                            <button class="border-0 bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path
                                        d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>
                <!-- /.user -->

                <div class="notification">

                    <div class="d-flex justify-content-between align-items-center h-100">

                        <div :class="this.state.notification ? 'active' : ''" class="ms-4">
                            Notifiche
                        </div>

                        <div>

                            <button class="border-0 bg-transparent">

                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                    <path
                                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg>

                            </button>

                        </div>

                    </div>

                </div>
                <!-- /.notification -->

                <div class="download">

                    <div class="d-flex align-items-center h-100 gap-2">

                        <button class="border-0 bg-transparent p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path
                                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                            </svg>
                        </button>


                        <div>
                            I miei download
                        </div>
                    </div>
                </div>
                <!-- /.download -->

                <div class="categories">

                    <h2>Film</h2>
                    <ul>
                        <li v-for="(genres, i) in this.state.movieGenres"
                            :class="this.state.genresActiveMovie[i] ? 'active' : ''"
                            @click="setGenresActiveMovie(i),
                                this.state.idGenresMovie = genres.id,
                                this.state.pageMovieByGenres = 1,
                                this.state.fetchMovieAboutGenres(this.state.idGenresMovie, this.state.pageMovieByGenres)">
                            <!--            COME SECONDO PARAMETRO PASSARE LA PAGINA CHE SI VUOLE VISUALIZZARE  -->
                            <div>{{ genres.name }}</div>
                        </li>
                    </ul>

                    <h2>Serie TV</h2>
                    <ul>
                        <li v-for="(genres, i) in this.state.serieGenres"
                            :class="this.state.genresActiveSerie[i] ? 'active' : ''"
                            @click="setGenresActiveSerie(i), this.state.idGenresSerie = genres.id, this.state.pageMovieByGenres = 1, this.state.fetchSerieAboutGenres(genres.id, this.state.pageSerieByGenres)">
                            <div>{{ genres.name }}</div>
                        </li>
                    </ul>

                </div>
                <!-- /.categories -->


            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
svg {
    filter: invert(100%) sepia(11%) saturate(7500%) hue-rotate(169deg) brightness(112%) contrast(111%);
    display: block;
}

@media screen and (max-width: 768px) {
    .offcanvas {
        width: 100%;
    }
}


.offcanvas-body {

    .user {
        height: 70px;
    }

    .notification,
    .download {
        height: 50px;
    }

    .notification {

        position: relative;

        .active:before {
            content: '';
            display: block;
            height: 0.5rem;
            width: 0.5rem;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            left: 0.5rem;
            top: 50%;
            transform: translateY(-50%)
        }
    }

    .categories {
        height: calc(100% - 170px);
        overflow-y: auto;

        ul {
            list-style: none;
            padding: 0;


            li {
                height: 40px;
                display: flex;
                align-items: center;
                padding-left: 1rem;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.25);
                }
            }

            li.active {
                border-left: 3px solid red;
            }
        }
    }
}
</style>