<template>
    <div>
        <h2>Photos</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8">
            <a v-for="item of photosItems" class="group" :href="item.path">
                <img class="opacity-30 group-hover:opacity-100" :src="'/images/photos/' + item.image" />
                <h5 class="relative -top-1/2 text-center group-hover:opacity-0 text-white">{{ item.title}} </h5>
            </a>
        </div>
    </div>
</template>


<script lang="ts">

  interface PhotosItem {
    title: string,
    image: string, 
    path: string
  }

  export default {
    components: {
        
    },
    setup() {

    },
    data: () => ({
        photosItems: [{title: 'Vietnam', image: 'vietnam.jpg', path: '/vietnam'},
        {title: 'Mayako', image: 'mayako.jpg', path: '/mayako'},
        {title: 'Music Village', image: 'music_village.jpg', path: '/music-village'}
        ] as PhotosItem[]
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