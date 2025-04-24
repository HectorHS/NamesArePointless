<template>
    <div>
        <img class="cursor-pointer" :class="classes" :src="image" @click="showLightbox"/>
        <!-- Lightbox -->
        <div class="bg-black/80 fixed top-0 left-0 h-[100vh] overflow-hidden p-10 w-full z-50 justify-center items-center" v-if="show" @click="hideLightbox">
            <div class="fixed text-white cursor-pointer text-4xl top-2 right-5" @click.stop="hideLightbox">&times;</div>
            <div class="flex">

                <div class="mx-auto" @click.stop="">
                    <img class="max-h-[90vh] " :src="image">
                </div>

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
        size: String
    },
    data: () => ({
        show: false,
    }),
    methods: {
        showLightbox() {
            this.show = true; 
        },
        hideLightbox() {
            this.show = false;
        }
    },
    computed: {
        classes() {
            let css = '';
            if (this.size == 'medium') {
                css = 'max-h-[50vh]';
            } else {
                css = 'h-32';
            }
            return css;
        }
    },
    watch: {
    },
    mounted () {
    }
  }

</script>
<style lang="scss" scoped>
.photo {
  @apply h-[50vh] ;
}
</style>