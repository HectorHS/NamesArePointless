<template>
    <div class="w-max">
        <div v-if="images.length == 1">
            <img class="cursor-pointer h-[25vw]" :src="'/images/ceramics/' +images[0].name " @click="showLightbox(images[0].name)"/>
            <div v-if="images[0].notes" class="text-xs">{{ images[0].notes }}</div>
        </div>
        <div v-if="images.length == 2 || images.length == 3 || images.length == 4" class="grid grid-cols-2 grid-flow-row gap-2">
            <div v-for="image of images" class="w-[15vw]">
                <img class="cursor-pointer" :src="'/images/ceramics/' + image.name " @click="showLightbox(image.name)"/>
                <div v-if="image.notes" class="text-xs">{{ image.notes }}</div>
            </div>
        </div>
        <div v-if="images.length > 4" class="grid grid-cols-3 grid-flow-row gap-2">
            <div v-for="image of images" class="w-[10vw]">
                <img  class="cursor-pointer" :src="'/images/ceramics/' + image.name " @click="showLightbox(image.name)"/>
                <div v-if="image.notes" class="text-xs">{{ image.notes }}</div>
            </div>
        </div>

        <!-- Lightbox -->
        <div class="bg-black/80 fixed top-0 left-0 h-[100vh] overflow-hidden p-10 w-full z-50 justify-center items-center" v-if="largeImage" @click="hideLightbox">
                <div class="fixed text-white cursor-pointer text-4xl top-2 right-5" @click.stop="hideLightbox">&times;</div>
                <div class="flex">

                    <div class="mx-auto" @click.stop="">
                        <img class="h-[90vh] " :src="'/images/ceramics/' + largeImage">
                    </div>

                </div>
            </div>
    </div>
</template>
<script lang="ts">
  import { defineComponent, type PropType } from 'vue';

    interface Image {
        name: string,
        notes?: string
    }

    export default defineComponent ({
        components: {
            
        },
        setup() {

        },
        props: {
            images: {
                type: Object as PropType<Image[]>,
                required: true
            },
        },
        data: () => ({
            largeImage: undefined as string | undefined
        }),
        methods: {
            showLightbox(image:string):void {
                this.largeImage = image; 
            },
            hideLightbox():void {
                this.largeImage = undefined;
            }
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
.photo {
  @apply h-[50vh] ;
}
</style>