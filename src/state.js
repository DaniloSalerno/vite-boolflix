import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({

    apiKey: '037b7cd8e55255b918dfc215381aac28',
    urlMovieBase: 'https://api.themoviedb.org/3/search/movie?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&query=',
    urlSeriesBase: 'https://api.themoviedb.org/3/search/tv?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&query=',
    urlBestSeries: 'https://api.themoviedb.org/3/discover/tv?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&page=1&sort_by=vote_average.desc&vote_count.gte=200',
    urlBestMovie: 'https://api.themoviedb.org/3/discover/movie?api_key=037b7cd8e55255b918dfc215381aac28&language=it_IT&page=1&sort_by=vote_average.desc&vote_count.gte=200',


    urlMovieGenres: 'https://api.themoviedb.org/3/genre/movie/list?api_key=037b7cd8e55255b918dfc215381aac28',
    urlSerieGenres: 'https://api.themoviedb.org/3/genre/tv/list?api_key=037b7cd8e55255b918dfc215381aac28',

    pageMovie: 1, //pagina corrente con tutti i film
    totalPageMovie: 1, //totale pagine dei film

    pageSerie: 1, //pagina corrente con tutti le serie
    totalPageSerie: 1,  //totale pagine delle serie

    searched: '', //stringa che viene inserita nel input search

    bestMovie: [], //array con i migliori film
    bestSeries: [], //array con le migliori serie
    movies: [], //array con i film cercati per nome
    series: [], //array con le serie cercate per nome

    movieGenres: [], //array con i generi dei film
    serieGenres: [], //array con i generi delle serie

    notification: true, //booleano per impostare classe active nelle notifiche

    genresActiveMovie: [], //array di valori booleani per impostare classe active su singolo genere selezionato
    genresActiveSerie: [], //array di valori booleani per impostare classe active su singolo genere selezionato

    actors: [], //array con gli attori


    coverPath: 'https://image.tmdb.org/t/p/',

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
    },


    fetchMovieGenres(url) {
        axios
            .get(url)
            .then(response => {

                this.movieGenres = response.data.genres
                this.genresActiveMovie = response.data.genres.map(() => {
                    return false
                })

            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchSerieGenres(url) {
        axios
            .get(url)
            .then(response => {

                this.serieGenres = response.data.genres
                this.genresActiveSerie = response.data.genres.map(() => {
                    return false
                })

            })
            .catch(error => {
                console.error(error);
            })
    }/* ,

    fetchActors(id) {
        axios
            .get('https://api.themoviedb.org/3/tv/' + id + '/credits', {
                params: {
                    api_key: this.apiKey
                }

            })
            .then(response => {
                this.actors = response.data.cast;
            })
    } */
})