<script>
import { state } from '../state.js'

export default {
    name: 'AppBanner',
    data() {
        return {
            state,
            countMovieStart: 0,
            countMovieEnd: 6,
            countSerieStart: 0,
            countSerieEnd: 6,
        }
    },

    created() {
        this.state.fetchBestSeries(this.state.urlBestSeries)
        this.state.fetchBestMovie(this.state.urlBestMovie)
    }
}
</script>

<template>
    <div class="container">

        <h2>I migliori film di sempre</h2>

        <div class="wrapper_row position-relative">

            <div>

                <button class="prev"
                    @click="countMovieStart > 0 ? countMovieStart -= 1 : countMovieStart = 0; countMovieEnd > 6 ? countMovieEnd -= 1 : countMovieEnd = 6">

                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>

                </button>
                <!-- /.prev -->

                <button class="next"
                    @click="countMovieStart < 13 ? countMovieStart += 1 : countMovieStart = 13; countMovieEnd < 19 ? countMovieEnd += 1 : countMovieEnd = 19">

                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>

                </button>
                <!-- /.next -->

            </div>

            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3 mb-3">

                <div class="col" v-for="bestMovie in this.state.bestMovie.slice(this.countMovieStart, this.countMovieEnd)">

                    <div class="card">

                        <img class="cover" :src="'https://image.tmdb.org/t/p/w342' + bestMovie.poster_path" alt="">

                        <div class="card-body text-center flex-column justify-content-between">

                            <div class="title">

                                <h6>Titolo</h6>

                                <div>{{ bestMovie.title }}</div>

                            </div>
                            <!-- /.title -->

                            <div class="original_title">

                                <h6>Titolo originale</h6>

                                <div>{{ bestMovie.original_title }}</div>

                            </div>
                            <!-- /.original_title -->

                            <div class="ratings">

                                <h6>Valutazione</h6>

                                <div>

                                    <span v-for="n in Math.round(bestMovie.vote_average / 2)">

                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                            <path
                                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>

                                    </span>

                                    <span v-for="n in (5 - Math.round(bestMovie.vote_average / 2))">

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

                                    Lingua: {{ bestMovie.original_language.toUpperCase() }}

                                </h6>

                                <img width="30"
                                    :src="bestMovie.original_language.toUpperCase() == 'EN' ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg' : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + bestMovie.original_language.toUpperCase() + '.svg'"
                                    alt="">

                            </div>
                            <!-- /lenguage -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

        </div>
        <!-- /.wrapper_row -->

        <h2>Le migliori serie di sempre</h2>

        <div class="wrapper_row position-relative">

            <div>

                <button class="prev"
                    @click="countSerieStart > 0 ? countSerieStart -= 1 : countSerieStart = 0; countSerieEnd > 6 ? countSerieEnd -= 1 : countSerieEnd = 6">

                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>

                </button>
                <!-- /.prev -->

                <button class="next"
                    @click="countSerieStart < 13 ? countSerieStart += 1 : countSerieStart = 13; countSerieEnd < 19 ? countSerieEnd += 1 : countSerieEnd = 19">

                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>

                </button>
                <!-- /.next -->
            </div>

            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3 mb-3">

                <div class="col" v-for="bestSerie in this.state.bestSeries.slice(this.countSerieStart, this.countSerieEnd)">

                    <div class="card">

                        <img class="cover" :src="'https://image.tmdb.org/t/p/w342' + bestSerie.poster_path" alt="">


                        <div class="card-body text-center flex-column justify-content-between">

                            <div class="title">

                                <h6>Titolo</h6>

                                <div>{{ bestSerie.title }}</div>

                            </div>
                            <!-- /.title -->

                            <div class="original_title">

                                <h6>Titolo originale</h6>

                                <div>{{ bestSerie.original_title }}</div>

                            </div>
                            <!-- /.original_title -->

                            <div class="ratings">

                                <h6>Valutazione</h6>

                                <div>
                                    <span v-for="n in Math.round(bestSerie.vote_average / 2)">

                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                            <path
                                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>

                                    </span>

                                    <span v-for="n in (5 - Math.round(bestSerie.vote_average / 2))">

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

                                    Lingua: {{ bestSerie.original_language.toUpperCase() }}

                                </h6>

                                <img width="30"
                                    :src="bestSerie.original_language.toUpperCase() == 'EN' ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg' : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + bestSerie.original_language.toUpperCase() + '.svg'"
                                    alt="">
                            </div>
                            <!-- /.lenguage -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

        </div>
        <!-- /.wrapper_row -->

    </div>
</template>


<style lang="scss" scoped>
.prev {
    left: -1.5rem;
}

.next {
    right: -1.5rem;
}


.wrapper_row {

    .prev,
    .next {
        display: none;
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.15);

        border: none;

        svg {
            filter: invert(100%) sepia(11%) saturate(7500%) hue-rotate(169deg) brightness(112%) contrast(111%);
            display: block;
        }
    }

    &:hover .prev,
    &:hover .next {
        display: block;
    }


}
</style>