<template >
    <v-container fluid class="text-center error-container">
        <h1 class="border-0 text-white">404</h1>
        <h5 class="text-white"> Sorry, we could not find the page you are looking for.</h5>
        <div class="flex justify-center mb-8 mt-8">
            <a class="button" href="/">< return</a>
        </div>
    </v-container>
</template>

<script lang="ts">
  export default {
    setup() {
    },
    data: () => ({
    }),
    computed: {
    },
    methods: {
    },
    mounted () {
    },
  }
</script>

<style scoped lang="scss">
// reseting background to hide the logo on the background
.error-container {
    z-index: 10;
    position: relative;
    height:100%;
    background: rgb(var(--v-theme-background));

    h5 {
        font-size: 1.7em;
    }
    h1 {
        font-size: 15em;
        padding-top: 10vh;
    }
}
</style>