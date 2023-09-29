import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({

    urlMovieBase: 'https://api.themoviedb.org/3/search/movie?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&query=',
    urlSeriesBase: 'https://api.themoviedb.org/3/search/tv?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&query=',
    urlBestSeries: 'https://api.themoviedb.org/3/discover/tv?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&page=1&sort_by=vote_average.desc&vote_count.gte=200',
    urlBestMovie: 'https://api.themoviedb.org/3/discover/movie?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&page=1&sort_by=vote_average.desc&vote_count.gte=200',

    pageMovie: 1,
    totalPageMovie: 1,

    pageSerie: 1,
    totalPageSerie: 1,

    searched: '',

    bestMovie: '',
    bestSeries: '',
    movies: '',
    series: '',

    coverPath: 'https://image.tmdb.org/t/p/',

    flagCountry: '',

    fetchMovieByName(url) {

        axios
            .get(url)
            .then(response => {

                this.movies = response.data.results
                this.totalPageMovie = response.data.total_pages
                this.pageMovie = response.data.page

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
                this.totalPageSerie = response.data.total_pages
                this.pageSerie = response.data.page

            })
            .catch(error => {
                console.error(error);
            })

    },

    fetchBestSeries(url) {
        axios
            .get(url)
            .then(response => {

                this.bestSeries = response.data.results

            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchBestMovie(url) {
        axios
            .get(url)
            .then(response => {

                this.bestMovie = response.data.results

            })
            .catch(error => {
                console.error(error);
            })
    }
})