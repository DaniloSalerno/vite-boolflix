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

    pageMovieByGenres: 1, //pagina corrente con tutti i film
    totalPageMovieByGenres: 1, //totale pagine dei film

    pageSerie: 1, //pagina corrente con tutti le serie
    totalPageSerie: 1,  //totale pagine delle serie

    pageSerieByGenres: 1, //pagina corrente con tutti le serie
    totalPageSerieByGenres: 1,  //totale pagine delle serie

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

    actors: [], //array con gli attori del singolo film
    actorsTv: [], //array con gli attori della singola serie

    movieAboutGenres: [], //array con tutti i film appartenenti ad uno specifico genere
    serieAboutGenres: [], //array con tutte le serie appartenenti ad uno specifico genere

    idGenresMovie: {}, //Oggetto contenente ID e NAME del genere di uno specifico film
    idGenresSerie: {}, //Oggetto contenente ID e NAME del genere di una specifica serie

    whatView: 'banner', // stringa che serve per determinare quale componente visualizzare nella pagina iniziale (APP.VUE)

    coverPath: 'https://image.tmdb.org/t/p/',


    //OTTENERE LISTA DI FILM E DATI PER L'IMPAGINAZIONE
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



    //OTTENERE LISTA DI SERIE E DATI PER L'IMPAGINAZIONE
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



    //OTTENERE LISTA DELLE MIGLIORI SERIE TV IN ORDINE DI VOTO
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



    //OTTENERE LISTA DEI MIGLIORI FILM IN ORDINE DI VOTO
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


    //OTTENERE LISTA DI TUTTI I GENERI DEI FILM E ARRAY DI BOOLEANI PER DETERMINARE LA CLASSE ACTIVE
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



    //OTTENERE LISTA DI TUTTI I GENERI DELLE SERIE E ARRAY DI BOOLEANI PER DETERMINARE LA CLASSE ACTIVE
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
    },


    //OTTENERE LISTA DEGLI ATTORI DI UN DETERMINATO FILM INDICATO DALL'ID
    fetchActors(id) {
        axios
            .get('https://api.themoviedb.org/3/movie/' + id + '/credits', {
                params: {
                    api_key: this.apiKey
                }

            })
            .then(response => {
                this.actors = response.data.cast;

                console.log(response.data.cast);
            })
            .catch(error => {
                console.error(error.message);
                /* MI DA ERRORE DICE CHE ID è UNDEFINED */
            })
    },



    //OTTENERE LISTA DEGLI ATTORI DI UNA DETERMINATA SERIE INDICATA DALL'ID
    fetchActorsTv(id) {
        axios
            .get('https://api.themoviedb.org/3/tv/' + id + '/credits', {
                params: {
                    api_key: this.apiKey
                }

            })
            .then(response => {
                this.actorsTv = response.data.cast;
                console.log(response.data.cast);
            })
            .catch(error => {
                console.error(error.message);
            })
    },



    //OTTENERE LISTA DI FILM IN BASE AL GENERE INDICATO CON ID,PAGE SERVE PER L'IMPAGINAZIONE
    fetchMovieAboutGenres(id, page) {
        axios
            .get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: this.apiKey,
                    with_genres: id,
                    page: page
                }
            })
            .then(response => {
                console.log(response.data);
                this.movieAboutGenres = response.data
                this.serieAboutGenres = []
                this.pageMovieByGenres = response.data.page
                this.totalPageMovieByGenres = response.data.total_pages

            })
            .catch(error => {
                console.error(error.message);
            })
    },



    //OTTENERE LISTA DELLE SERIE IN BASE AL GENERE INDICATO CON ID,PAGE SERVE PER L'IMPAGINAZIONE
    fetchSerieAboutGenres(id, page) {
        axios
            .get('https://api.themoviedb.org/3/discover/tv', {
                params: {
                    api_key: this.apiKey,
                    with_genres: id,
                    page: page
                }
            })
            .then(response => {
                console.log(response.data);
                this.serieAboutGenres = response.data
                this.movieAboutGenres = []

                this.pageSerieByGenres = response.data.page
                this.totalPageSerieByGenres = response.data.total_pages
            })
            .catch(error => {
                console.error(error.message);
            })
    }
})