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
    <div class="movie_list_by_genres" v-show="this.state.movieAboutGenres.length !== 0">

        <div class="container d-flex justify-content-between align-items-center mt-1">

            <h2>Film di genere: {{ this.state.idGenresMovie.name }}</h2>

            <div class="prev_next d-flex gap-2">

                <button @click="prevFilmsByGenres" v-show="this.state.pageMovieByGenres !== 1">

                    {{ this.state.pageMovieByGenres != 1 ? this.state.pageMovieByGenres - 1 : '' }}

                </button>

                <div class="text-white">

                    Pagina {{ this.state.pageMovieByGenres }} di {{ this.state.totalPageMovieByGenres }}

                </div>

                <button @click="nextFilmsByGenres"
                    v-show="this.state.totalPageMovieByGenres !== this.state.pageMovieByGenres">

                    {{ this.state.pageMovieByGenres + 1 }}

                </button>

            </div>
            <!-- /.prev_next -->
        </div>
        <!-- /.container -->

        <div>

            <div class="container">

                <div class="row  row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">

                    <div class="col" v-for="movie in this.state.movieAboutGenres.results">

                        <div class="card">

                            <img class="cover" :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt=""
                                @error="$event.target.src = getImageUrl('../assets/img/image-not-found.jpg')">

                            <div class="card-body text-center flex-column justify-content-between">

                                <div class="title">

                                    <h6>Titolo</h6>

                                    <div>{{ movie.title }}</div>

                                </div>
                                <!-- /.title -->

                                <div class="original_title">

                                    <h6>Titolo originale</h6>

                                    <div>{{ movie.original_title }}</div>

                                </div>
                                <!-- /.original_title -->

                                <div class="ratings">

                                    <h6>Valutazione</h6>

                                    <div>
                                        <span v-for="n in Math.round(movie.vote_average / 2)">

                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                                <path
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                            </svg>

                                        </span>

                                        <span v-for="n in (5 - Math.round(movie.vote_average / 2))">

                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                                <path
                                                    d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                            </svg>

                                        </span>
                                    </div>

                                </div>
                                <!-- /.ratings -->


                                <div class="lenguage">

                                    <h6>
                                        lingua: {{ movie.original_language.toUpperCase() }}
                                    </h6>

                                    <img width="30"
                                        :src="movie.original_language.toUpperCase() == 'EN' ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg' : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + movie.original_language.toUpperCase() + '.svg'"
                                        alt="">
                                </div>
                                <!-- /.lenguage -->


                                <!-- Button trigger modal -->
                                <button type="button" class="actors btn" data-bs-toggle="modal"
                                    data-bs-target="#modal_movie" @click="this.state.fetchActors(movie.id)">
                                    Attori Principali
                                </button>

                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="modal_movie" tabindex="-1" aria-labelledby="modal_movieLabel"
                                aria-hidden="true">

                                <div class="modal-dialog">

                                    <div class="modal-content">

                                        <div class="modal-header bg-dark">

                                            <h1 class="modal-title fs-5 text-white" id="modal_movieLabel">

                                                Attori principali

                                            </h1>

                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>

                                        </div>
                                        <!-- /.modal-header -->

                                        <div class="modal-body bg-dark">

                                            <div class="cast text-white" v-if="this.state.actors.length > 0">

                                                <div v-for="actor in this.state.actors.slice(0, 5)" class="mb-3">

                                                    <div v-if="actor.character">
                                                        {{ actor.character }}:
                                                    </div>

                                                    {{ actor.name }}

                                                </div>

                                            </div>

                                            <div class="cast text-white" v-else>

                                                Non ci sono attori da visualizzare

                                            </div>
                                        </div>
                                        <!-- /.modal-body -->

                                        <div class="modal-footer bg-dark">

                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">

                                                Close

                                            </button>

                                        </div>
                                        <!-- /.modal-footer -->

                                    </div>
                                    <!-- /.modal-content -->

                                </div>
                                <!-- /.modal-dialog -->

                            </div>
                            <!-- /.modal -->

                        </div>
                        <!-- /.card -->

                    </div>
                    <!-- /.col -->

                </div>
                <!-- /.row -->

            </div>
            <!-- /.container -->

        </div>

    </div>
    <!-- /.movie_list_by_genres -->



    <div class="serie_list_by_genres" v-show="this.state.serieAboutGenres.length !== 0">

        <div class="container d-flex justify-content-between align-items-center mt-1">

            <h2>Serie di genere: {{ this.state.idGenresSerie.name }}</h2>

            <div class="prev_next d-flex gap-2">

                <button @click="prevSeriesByGenres" v-show="this.state.pageSerieByGenres !== 1">

                    {{ this.state.pageSerieByGenres != 1 ? this.state.pageSerieByGenres - 1 : '' }}

                </button>

                <div class="text-white">

                    Pagina {{ this.state.pageSerieByGenres }} di {{ this.state.totalPageSerieByGenres }}

                </div>

                <button @click="nextSeriesByGenres"
                    v-show="this.state.totalPageSerieByGenres !== this.state.pageSerieByGenres">
                    {{ this.state.pageSerieByGenres + 1 }}
                </button>

            </div>
            <!-- /.prev_next -->

        </div>
        <!-- /.container -->


        <div>
            <div class="container">

                <div class="row  row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">

                    <div class="col" v-for="serie in this.state.serieAboutGenres.results">

                        <div class="card">

                            <img class="cover" :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt=""
                                @error="$event.target.src = getImageUrl('../assets/img/image-not-found.jpg')">

                            <div class="card-body text-center flex-column justify-content-between">

                                <div class="title">

                                    <h6>Titolo</h6>

                                    <div>{{ serie.title }}</div>

                                </div>
                                <!-- /.title -->

                                <div class="original_title">

                                    <h6>Titolo originale</h6>

                                    <div>{{ serie.original_title }}</div>

                                </div>
                                <!-- /.original_title -->

                                <div class="ratings">

                                    <h6>Valutazione</h6>

                                    <div>
                                        <span v-for="n in Math.round(serie.vote_average / 2)">

                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                                <path
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                            </svg>

                                        </span>

                                        <span v-for="n in (5 - Math.round(serie.vote_average / 2))">

                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                                <path
                                                    d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                            </svg>

                                        </span>
                                    </div>

                                </div>
                                <!-- /.ratings -->

                                <div class="lenguage">

                                    <h6>
                                        lingua: {{ serie.original_language.toUpperCase() }}
                                    </h6>

                                    <img width="30"
                                        :src="serie.original_language.toUpperCase() == 'EN' ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg' : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + serie.original_language.toUpperCase() + '.svg'"
                                        alt="">
                                </div>
                                <!-- /lenguage -->

                                <!-- Button trigger modal -->
                                <button type="button" class="actors btn" data-bs-toggle="modal"
                                    data-bs-target="#modal_serie" @click="this.state.fetchActorsTv(serie.id)">

                                    Attori Principali

                                </button>

                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="modal_serie" tabindex="-1" aria-labelledby="modal_serieLabel"
                                aria-hidden="true">

                                <div class="modal-dialog">

                                    <div class="modal-content">

                                        <div class="modal-header bg-dark">

                                            <h1 class="modal-title fs-5 text-white" id="modal_serieLabel">
                                                Attori principali
                                            </h1>

                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>

                                        </div>

                                        <div class="modal-body bg-dark">

                                            <div class="cast text-white" v-if="this.state.actorsTv.length > 0">

                                                <div v-for="actorTv in this.state.actorsTv.slice(0, 5)" class="mb-3">

                                                    <div v-if="actorTv.character">

                                                        {{ actorTv.character }}:

                                                    </div>

                                                    {{ actorTv.name }}

                                                </div>

                                            </div>

                                            <div class="cast text-white" v-else>
                                                Non ci sono attori da visualizzare
                                            </div>

                                        </div>
                                        <!-- /.modal-body -->

                                        <div class="modal-footer bg-dark">

                                            <button type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Close</button>

                                        </div>
                                        <!-- /.modal-footer -->

                                    </div>
                                    <!-- /.modal-content -->

                                </div>
                                <!-- /modal-dialog -->

                            </div>
                            <!-- /.modal -->

                        </div>
                        <!-- /.card -->

                    </div>
                    <!-- /.col -->

                </div>
                <!-- /.row -->

            </div>
            <!-- /.container -->

        </div>

    </div>
    <!-- /.serie_list_by_genres -->
</template>

<style lang="scss" scoped></style>