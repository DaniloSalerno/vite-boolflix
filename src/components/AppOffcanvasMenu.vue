<script>
import 'bootstrap';


export default {
    name: 'AppOffcanvasMenu'
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
            <div class="offcanvas-header">

                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <!--  -->
                AGGIUNGERE CONTENUTO
                <!--  -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
svg {
    filter: invert(100%) sepia(11%) saturate(7500%) hue-rotate(169deg) brightness(112%) contrast(111%);
}

@media screen and (max-width: 768px) {
    .offcanvas {
        width: 100%;
    }
}
</style>