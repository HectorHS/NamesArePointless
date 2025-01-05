<template>
  <Playlists class="px-base mt-5"></Playlists>
  <Photos class="px-base mt-5"></Photos>
  <Ceramics class="px-base mt-5 mb-10"></Ceramics>
    


</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Playlists from '@/components/Playlists.vue';
  import Photos from '@/components/Photos.vue';
  import Ceramics from '@/components/Ceramics.vue';

  export default defineComponent ({
    components: {
        Playlists,
        Photos,
        Ceramics
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
  })

</script>

<style lang="scss" scoped>

</style>