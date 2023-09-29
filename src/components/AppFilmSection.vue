<script>
import AppFilmList from './AppFilmList.vue'
export default {
    name: 'AppFilmSection',

    components: {
        AppFilmList
    },
    methods: {
    },
}
</script>

<template>
    <section id="film">

        <div class="container">

            <h2>Film</h2>

            <AppFilmList />



        </div>

    </section>
</template>

<style lang="scss" scoped></style>