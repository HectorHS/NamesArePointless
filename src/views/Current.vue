<template>
  <div class="px-base mt-10">
    <div class="flex justify-between">
      <!-- bases -->
      <h1 class="mb-6">BASES</h1>
      <a class="button text-textColor" href="/">< return</a>
    </div>
    <div class="pl-8 md:pl-12 lg:pl-16">
      <div v-for="item of bases" class="mb-10 border-l-4 border-yellow-400 pl-2">
        <a v-if="item.link" :href="item.link" target="_blank">
          <h3>{{item.title}}</h3>
        </a>
        <h3 v-else>{{item.title}}</h3>
        <div>{{item.subtitle}}</div>
        <div class="mt-6 ml-6">
          <div class="flex flex-col md:flex-row">
            <CeramicImage :image="item.image" size="medium"></CeramicImage>
            <div v-html="item.recipe" class="my-auto pt-5 md:pl-5 md:pt-0"></div>
          </div>
          <div v-if="item.notes" class="pt-5">Notes: {{ item.notes }}</div>
        </div>
      </div>
    </div>

    <!-- Colourants -->
    <h1 class="mt-16 mb-6">COLOURANTS</h1>
    <div class="pl-8 md:pl-12 lg:pl-16 grid grid-cols-1 md:grid-cols-2 grid-flow-row">
      <div v-for="item of colourants" class="border-l-4 border-yellow-400 pl-6 mb-12">
        <a v-if="item.link" :href="item.link" target="_blank">
          <h3>{{item.name}}</h3>
        </a>
        <h3 v-else>{{item.name}}</h3>
        <div v-if="item.recipe">{{ item.recipe }}</div>
        <CeramicGallery :images="item.images"></CeramicGallery>
      </div>
    </div>

    <!-- Double glazes -->
    <h1 class="mt-16 mb-6">DOUBLE GLAZES</h1>
    <div class="pl-8 md:pl-12 lg:pl-16 grid grid-cols-1 md:grid-cols-2 grid-flow-row">
      <div v-for="item of doubleGlazes" class="border-l-4 border-yellow-400 pl-6 mb-12">
        <a v-if="item.link" :href="item.link" target="_blank">
          <h3>{{item.name}}</h3>
        </a>
        <h3 v-else>{{item.name}}</h3>
        <div v-if="item.recipe">{{ item.recipe }}</div>
        <CeramicGallery :images="item.images"></CeramicGallery>
      </div>
    </div>

    <!-- Others -->
    <h1 class="mt-16 mb-6">Others</h1>
    <div class="pl-8 md:pl-12 lg:pl-16 grid grid-cols-1 md:grid-cols-2 grid-flow-row">
      <div v-for="item of others" class="border-l-4 border-yellow-400 pl-6 mb-12">
        <a v-if="item.link" :href="item.link" target="_blank">
          <h3>{{item.name}}</h3>
        </a>
        <h3 v-else>{{item.name}}</h3>
        <div v-if="item.recipe">{{ item.recipe }}</div>
        <CeramicGallery :images="item.images"></CeramicGallery>
      </div>
    </div>

    <div class="flex justify-end mb-8">
      <a class="button" href="/">< return</a>
    </div>
    
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import CeramicImage from '@/components/CeramicImage.vue';
  import CeramicGallery from '@/components/CeramicGallery.vue';

  export default defineComponent ({
    components: {
      CeramicImage,
      CeramicGallery
    },
    setup() {
    },
    data: () => ({
      bases: [
        {title: 'Glossy (Old Forge fist five)', subtitle: 'test tiles 01', image:'/images/ceramics/001.jpg', recipe: '32.5 Silica </br> 25 Fero Frit 3134 </br> 20 Nepheline Syenite</br>12.5 EP Kaolin</br>10 Whiting</br>2 bentonite,', link:'https://glazy.org/materials/144590'},
        {title: 'Matte (Old Forge matte)',  subtitle: 'test tiles 11', image:'/images/ceramics/011.jpg', recipe: '30 EP Kaolin</br>30 Nepheline Syenite</br>15 Fero Frit 3134</br>15 Whiting</br>10 Silica</br>2 bentonite', link:'https://glazy.org/recipes/147183', notes: 'A thick application pretty essential. Bottom half is one 5-6s dip, upper half is double dip.'},
        {title: 'Satin',  subtitle: 'test tiles 77', image:'/images/ceramics/077.jpg', recipe: '27.5 Silica</br>22.5 Fero Frit 3134</br>22.5 Nepheline Syenite</br>16.25 EP Kaolin</br>11.25 Whiting</br>2 Bentonite</br>2.5 Titanium', link: '', notes: 'I experimented with variations between the glossy and matte bases above. The one I like the most is the further right from the pictured (closer to glossy recipe wise).'},
        {title: 'Strontium',  subtitle: 'with copper colourant', image:'/images/ceramics/046.jpg', recipe: '40 Potash</br>21 Strontium</br>15 Silica</br>12 EP Kaolin</br>12 Ferro Frit 3134</br>8 Rutile</br>2 Bentonite', link: 'https://glazy.org/recipes/39066'}
      ],
      colourants: [
        {name: 'Orange/blue - Glossy', recipe: '4 rutile, 4 manganese, 2 red iron oxide', link: 'https://glazy.org/recipes/56085', images: [{name: '009.jpg', notes: 'test tiles 9'},{name: '009-2.jpg'},{name: '009-3.jpg'},{name: '009-4.jpg'},{name: '009-5.jpg'},{name: '009-6.jpg'},{name: '009-7.jpg'},{name: '009-8.jpg'}]},
        {name: 'Chrome - Glossy', recipe: '2.5 titanium, 1 chrome', link: 'https://glazy.org/recipes/219390', images: [{name: '010.jpg', notes:'test tiles 10'},{name: '010-2.jpg'},{name: '010-3.jpg'},{name: '010-4.jpg'},{name: '010-5.jpg'}]},
        {name: 'Purple - Glossy', recipe: '2 tin, 1 titanium, 0.25 cobalt, 0.1 chrome', link: 'https://glazy.org/recipes/198196', images: [{name: '005.jpg', notes:'test tiles 5'},{name:'005-2.jpg'},{name:'005-3.jpg'},{name: '005-4.jpg', notes: 'purple on the rim dripped down and merged with red on the inside.'}]},
        {name: 'Pistachio - Glossy', recipe: '6 rutile, 4 copper carbonate', link: 'https://glazy.org/recipes/11709', images: [{name:'006.jpg', notes:'test tiles 6'},{name:'006-2.jpg'},{name:'006-3.jpg'}]},
        {name: 'White - Glossy', recipe: '2.5 titanium, 2 rutile', link: 'https://glazy.org/materials/144590', images: [{name: '024.jpg', notes:'test tiles 24'},{name: '024-2.jpg'}]},
        {name: 'Red - Glossy', recipe: '2.5 titanium, 5 tin, 0.15 chrome', link: 'https://glazy.org/recipes/1467', images: [{name: '025.jpg', notes: 'test tiles 25'},{name: '072.jpg', notes:'red on top of chrome, test tiles 72'},{name: '044-2.jpg', notes:'spots of red on top of chrome, very nice and controllable'}]},
        {name: 'Iron - Glossy', recipe: '10 RIO, 2.5 titanium', link: 'https://glazy.org/recipes/238642', images: [{name: '042.jpg', notes:'test tiles 42'},{name: '064.jpg', notes:'also on test tiles 64 with flux on top'}, {name: '042-2.jpg'}]},
        {name: 'Light blue - Strontium', recipe: '1.5 Copper, 0.5 Cobalt', link: 'https://glazy.org/recipes/39066', images: [{name: '048.jpg', notes: 'test tiles 48'}]},
        {name: 'Gray - Matte', recipe: '5 rutile, 0.27 cobalt, 0.2 chrome', link: 'https://glazy.org/recipes/114478', images: [{name: '013.jpg', notes:'test tiles 13'},{name: '013-2.jpg'},{name: '013-3.jpg'}]},
        {name: 'Blue - Matte', recipe: '0.27 cobalt, 0.2 chrome', link: 'https://glazy.org/recipes/114478', images: [{name: '014.jpg', notes:'test tiles 14'},{name: '014-2.jpg'},{name: '014-3.jpg', notes:'blue on the rim merges nicely with orange on the inside'}]},
        {name: 'Black', recipe: '6 Black stain', images: [{name: '049.jpg', notes:'on glossy base, test tiles 49'},{name: '074.jpg', notes: 'on matte base, test tiles 74'}]},
      ],
      doubleGlazes: [
        {name: 'Blue transparent on black', recipe: '2.5 titanium, 1 copper', link: 'https://glazy.org/recipes/150981', images: [{name:'069.jpg', notes:'test tiles 69'},{name:'002-4.jpg'}]},
        {name: 'Purple on white', images: [{name:'060.jpg', notes:'test tiles 60'},{name:'005-5.jpg'}]},
        {name: 'Chrome on pistachio', images: [{name: '067.jpg', notes: 'test tiles 67'},{name: '010-6.jpg'},{name: '010-7.jpg'},{name: '010-8.jpg'}]},
        {name: 'Pistachio on black', images: [{name:'068.jpg', notes:'test tiles 68'},{name:'006-4.jpg'}]},
      ],
      others: [
        {name: 'Flux', recipe: '50 Ferro Fritt 3134, 15 Nepheline Syenite, 15 Silica, 15 Whiting, 5 EP Kaolin, 2 bentonite', link: 'https://glazy.org/recipes/246933', images: [{name: '064.jpg', notes: 'flux on top of iron, test tiles 64'},{name: '065.jpg', notes: 'flux on top of orange/blue, test tiles 65'},{name: '035-2.jpg', notes: 'transparent blue applied heavily on the lip with flux on top'}]}
      ],
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
