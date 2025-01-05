<template>
    <div>
        <h2>Ceramics</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8">
            <a class="group" href="/ceramics/experiments">
                <img class="opacity-30 group-hover:opacity-100" src="/images/ceramics/experiments.jpg" />
                <h5 class="relative -top-1/2 text-center group-hover:opacity-0 text-white">Experiments</h5>
            </a>
            <a class="group" href="/ceramics/current">
                <img class="opacity-30 group-hover:opacity-100" src="/images/ceramics/current.jpg" />
                <h5 class="relative -top-1/2 text-center group-hover:opacity-0 text-white">Current</h5>
            </a>
        </div>
    </div>
</template>

<script lang="ts">

  export default {
    components: {
        
    },
    setup() {

    },
    data: () => ({
    }),
    methods: {
    },
    computed: {
    },
    watch: {
    },
    mounted () {
    }
  }

</script>

<style lang="scss" scoped>
</style>