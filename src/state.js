import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({

    urlBase: 'https://api.themoviedb.org/3/search/movie?api_key=037b7cd8e55255b918dfc215381aac28&query=',

    filmSearched: '',

    results: '',



    fetchMovieByName(url) {

        axios
            .get(url)
            .then(response => {

                this.results = response.data.results

            })
            .catch(error => {
                console.error(error);
            })

    },
})