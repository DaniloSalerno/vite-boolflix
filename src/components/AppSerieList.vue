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
    },
}
</script>

<template>
    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">

        <AppSerieCard :serie="serie" v-for="serie in this.state.series" />

    </div>
</template>

<style lang="scss" scoped></style>