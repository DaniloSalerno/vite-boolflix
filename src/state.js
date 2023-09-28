import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({

    urlMovieBase: 'https://api.themoviedb.org/3/search/movie?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&query=',
    urlSeriesBase: 'https://api.themoviedb.org/3/search/tv?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&query=',

    searched: '',

    movies: '',
    series: '',

    coverPath: 'https://image.tmdb.org/t/p/',

    flagCountry: '',

    fetchMovieByName(url) {

        axios
            .get(url)
            .then(response => {

                this.movies = response.data.results
            })
            .catch(error => {
                console.error(error);
            })

    },

    fetchSeriesByName(url) {

        axios
            .get(url)
            .then(response => {

                this.series = response.data.results

            })
            .catch(error => {
                console.error(error);
            })

    },
})