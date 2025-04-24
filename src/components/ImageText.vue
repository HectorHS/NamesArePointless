<template>
    <div>
        <div v-if="orientation == 'landscape'">
            <img class="max-h-[100vh] mx-auto" :src="image" />
            <div class="flex justify-center pt-2 mb-16">
                <!-- on v-html to allow html tags in title like </br> -->
                <h3 class="text-center max-w-prose my-auto mr-6" v-html="title"></h3> 
                <div class=" max-w-prose border-l-4 border-yellow pl-6">{{ text }}</div>
            </div>
        </div>
        <div v-else class="lg:flex mb-16">
            <img class="max-h-[100vh] mx-auto" :src="image" />
            <div class="flex lg:block justify-center pt-2 lg:pl-8 my-auto">
                <h3 class="text-center max-w-prose my-auto mr-6 lg:mr-0 lg:mb-6" v-html="title"></h3> 
                <div class=" max-w-prose border-l-4 lg:border-t-4 lg:border-l-0 border-yellow pl-6 lg:pl-0 lg:pt-6">{{ text }}</div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
  export default {
    components: {
    },
    setup() {
    },
    props: {
        image: String,
        text: String,
        title: String,
        orientation: String
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