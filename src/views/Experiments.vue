<template>
  <div class="px-base mt-10">
    <div class="flex justify-between">
      <h1 class="mb-6">BASES</h1>
      <a class="button text-textColor" href="/">< return</a>
    </div>
    <div class="pl-16">
      <!-- bases -->
      <div v-for="item of bases" class="mb-10 border-l-4 border-yellow-400 pl-2">
        <a :href="item.link" target="_blank">
          <h3 class="text-yellow-400">{{item.title}}</h3>
        </a>
        <div>{{item.subtitle}}</div>
        <div class="mt-6 ml-6">
          <div class="flex">
            <CeramicImage :image="item.image" size="medium"></CeramicImage>
            <div v-html="item.recipe" class="my-auto pl-5"></div>
          </div>
          <div v-if="item.notes">Notes: {{ item.notes }}</div>
        </div>
      </div>
    </div>
    <h1 class="mt-16 mb-6">COLOURANTS</h1>
    <div class="pl-16 ">
      <!-- Colourants -->
      <div v-for="item of colourants" class="border-l-4 border-yellow-400 pl-2 mb-12">
        <a :href="item.link" target="_blank">
          <h3 class="">{{item.name}}</h3>
        </a>
        <div>{{ item.recipe }}</div>
        <div class=" mt-6 ml-6 grid grid-cols-2 grid-flow-row">
          <div v-for="child of item.children" class=" ">
            <h5>{{ child.title }}</h5>
            <CeramicGallery :images="child.images"></CeramicGallery>
          </div>

        </div>
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
        {title: 'Glossy (Old Forge fist five)', subtitle: 'test tiles 01', image:'/images/ceramics/001.jpg', recipe: '32.5 Silica </br> 25 Fero Frit 3134 </br> 20 Nepheline Syenite</br>12.5 EP Kaolin</br>10 Whiting', link:'https://glazy.org/materials/144590'},
        {title: 'Matte (Old Forge matte)',  subtitle: 'test tiles 11', image:'/images/ceramics/011.jpg', recipe: '30 EP Kaolin</br>30 Nepheline Syenite</br>15 Fero Frit 3134</br>15 Whiting</br>10 Silica</br>2 bentonite', link:'https://glazy.org/recipes/147183', notes: 'A thick application pretty essential. Bottom half is one 5-6s dip, upper half is double dip.'},
        {title: 'Matte2 (Katz-Burke matte)',  subtitle: 'test tiles 16', image:'/images/ceramics/016.jpg', recipe: '29.23 EP Kaolin</br>22.56 Ferro Frit 3124</br>20.37 Nepheline Syenite</br>17.10 Whiting</br>10.74 Silica', link: 'https://glazy.org/recipes/16540', notes: 'This base created too many bubbles, too rough on touch. Maybe temperature too high?'},
        {title: 'Strontium',  subtitle: 'with copper colourant', image:'/images/ceramics/046.jpg', recipe: '40 Potash</br>21 Strontium</br>15 Silica</br>12 EP Kaolin</br>12 Ferro Frit 3134</br>8 Rutile</br>2 Bentonite', link: 'https://glazy.org/recipes/39066'}
      ],
      colourants: [
        {name: 'Light blue', recipe: '2 bentonite, 2.5 titanium, 1 copper', link: 'https://glazy.org/recipes/150981', children: [ 
          { title: '02, on glossy base', images: [{name:'002.jpg'},{name:'050.jpg', notes:'glaze 2 on top of glaze 10, test tiles 50'},{name:'051.jpg', notes:'glaze 2 on top of glaze 20, test tiles 51'},{name:'052.jpg', notes: 'glaze 2 on top of glaze 40, test tiles 52'},{name:'053.jpg', notes:'glaze 2 on top of glaze 24, test tiles 53'},{name:'054.jpg', notes: 'glaze 2 on top of glaze 8, test tiles 54'},{name:'069.jpg', notes:'glaze 2 on top of glaze 49, test tiles 69'},{name:'002-2.jpg'},{name:'002-3.jpg'},{name:'002-4.jpg', notes:'glaze 2 on top of glaze 49'}]},
          { title: '15, on matte base', images: [{name:'015.jpg'}]}]
        },{name: 'Red', recipe: '2 bentonite, 2.5 titanium, 1 tin, 0.03 chrome', link: 'https://glazy.org/materials/144590', children: [ 
          { title: '03, on glossy base', images: [{name:'003.jpg'},{name:'003-2.jpg', notes:'applied 3 layers to avoid transparency but dripped'},{name:'003-3.jpg'}]},
          { title: '26, on matte base', images: [{name:'026.jpg'}]}]
        },{name: 'Rasberry', recipe: '2 bentonite, 5 tin, 0.1 chrome', link: 'https://glazy.org/recipes/57481', children: [ 
          { title: '04, on glossy base', images: [{name:'004.jpg'}]},
          { title: '40, on original base', images: [{name: '040.jpg', notes: '32 Silica, 21 Gerstley Borate, 17 Nepheline Syenite, 15 Whiting, 11 EP Kaolin, 4 Zinc Oxide'},{name:'040-2.jpg'}]}]
        },{name: 'Blurple', recipe: '2 bentonite, 2 tin, 1 titanium, 0.25 cobalt, 0.1 chrome', link: 'https://glazy.org/recipes/198196', children: [ 
          { title: '05, on glossy base', images: [{name: '005.jpg'},{name:'059.jpg', notes:'glaze 5 on top of glaze 40, test tiles 59'},{name:'060.jpg', notes:'glaze 5 on top of glaze 24, test tiles 60'},{name:'061.jpg', notes:'glaze 5 on top of glaze 8, test tiles 61'},{name:'062.jpg', notes:'glaze 5 on top of glaze 20, test tiles 62'},{name:'005-2.jpg'},{name:'005-3.jpg'},{name: '005-4.jpg', notes: '5 on the rim dripped down and merged with 25 on the inside.'},{name:'005-5.jpg', notes:'glaze 5 on top of glaze 24'}]},
          { title: '31, on matte base', images: [{name:'031.jpg'}]}]
        },{name: 'Green', recipe: '2 bentonite, 6 rutile, 4 copper carbonate', link: 'https://glazy.org/recipes/11709', children: [ 
          { title: '06, on glossy base', images: [{name:'006.jpg'}, {name:'068.jpg', notes:'glaze 6 on top of glaze 8, test tiles 68'},{name:'071.jpg', notes:'glaze 6 on top of glaze 49, test tiles 71'},{name:'006-2.jpg'},{name:'006-3.jpg'},{name:'006-4.jpg', notes:'glaze 6 on top of glaze 8'}]}]
        },{name: 'Blue/Green', recipe: '2 bentonite, 3.5 copper carbonate', link: 'https://glazy.org/recipes/21430', children: [ 
          { title: '07, on glossy base', notes: 'Only the first tile looks similar to link, and still too transparent. Copper is high so might not be worth experimenting', images: [{name: '007.jpg'},{name: '055.jpg', notes: 'glaze 7 on top of glaze 21, test tiles 55'},{name: '056.jpg', notes: 'glaze 7 on top of glaze 8, test tiles 56'},{name: '057.jpg', notes: 'glaze 7 on top of glaze 40, test tiles 57'},{name: '058.jpg', notes: 'glaze 7 on top of glaze 10, test tiles 58'},{name: '070.jpg', notes: 'glaze 7 on top of glaze 49, test tiles 70'}]}]
        },{name: 'Black', recipe: '6.7 red iron oxide, 2 cobalt', link: 'https://glazy.org/recipes/31558', children: [ 
          { title: '08, on glossy base', images: [{name: '008.jpg'},{name:'008-2.jpg'}]},
          { title: '12, on matte base', images: [{name: '012.jpg'},{name: '012-2.jpg'}]},
          { title: '17, on matte2 base', images: [{name: '017.jpg'}]}]
        },{name: 'Orange', recipe: '2 bentonite, 4 rutile, 4 manganese, 2 red iron oxide', link: 'https://glazy.org/recipes/56085', children: [ 
          { title: '09, on glossy base', images: [{name: '009.jpg'},{name: '009-2.jpg'},{name: '009-3.jpg'},{name: '009-4.jpg'},{name: '009-5.jpg'},{name: '009-6.jpg'},{name: '009-7.jpg'},{name: '009-8.jpg'}]},
          { title: '27, on matte base', images: [{name: '027.jpg'}]}]
        },{name: 'Chrome', recipe: '2 bentonite, 2.5 titanium, 1 chrome', link: 'https://glazy.org/recipes/219390', children: [ 
          { title: '10, on glossy base', images: [{name: '010.jpg'},{name: '067.jpg', notes: 'glaze 10 on top of glaze 6, test tiles 67'},{name: '073.jpg', notes: 'glaze 10 on top of glaze 42, test tiles 73'},{name: '010-2.jpg'},{name: '010-3.jpg'},{name: '010-4.jpg'},{name: '010-5.jpg'},{name: '010-6.jpg', notes: 'glaze 10 on top of glaze 6'},{name: '010-7.jpg', notes: 'glaze 10 on top of glaze 6'},{name: '010-8.jpg', notes: 'glaze 10 on top of glaze 6'}]},
          { title: '28, on matte base', images: [{name: '028.jpg'}]}]
        },{name: 'Light gray', recipe: '5 rutile, 0.27 cobalt, 0.2 chrome', link: 'https://glazy.org/recipes/114478', children: [ 
          { title: '13, on matte base', images: [{name: '013.jpg'},{name: '013-2.jpg'},{name: '013-3.jpg'}]},
          { title: '18, on matte2 base', images: [{name: '018.jpg'}]}]
        },{name: 'Greenish', recipe: '0.27 cobalt, 0.2 chrome', link: 'https://glazy.org/recipes/114478', children: [ 
          { title: '14, on matte base', images: [{name: '014.jpg'},{name: '014-2.jpg'},{name: '014-3.jpg', notes:'14 on the rim merges nicely with 43 on the inside'}]},
          { title: '19, on matte2 base', images: [{name: '019.jpg'}]}]
        },{name: 'Blue', recipe: '2 bentonite, 4 rutile, 2 manganese dioxide, 1 cobalt carbonate', link: 'https://glazy.org/recipes/77013', notes: 'should try original base', children: [ 
          { title: '23, on glossy base', images: [{name: '023.jpg'}]},
          { title: '32, on matte base', images: [{name: '032.jpg'}]}]
        },{name: 'Yellow', recipe: '2 bentonite, 2.5 titanium, 2 rutile', link: 'https://glazy.org/materials/144590', children: [ 
          { title: '24, on glossy base', images: [{name: '024.jpg'},{name: '024-2.jpg'}]},
          { title: '33, on matte base', images: [{name: '033.jpg'}]}]
        },{name: 'Red2', recipe: '5 tin oxide, 0.15 chrome oxide', link: 'https://glazy.org/recipes/1467', children: [ 
          { title: '25, on glossy base', images: [{name: '025.jpg'},{name: '025-2.jpg'},{name: '025-3.jpg'}]},
          { title: '34, on matte base', images: [{name: '034.jpg'}]}]
        },{name: 'Dark gray', recipe: '5 rutile, 3 manganese dioxide, 1 cobalt carbonate', link: 'https://glazy.org/recipes/114478', children: [ 
          { title: '29, on matte base', images: [{name: '029.jpg'}]}]
        },{name: 'Black2', recipe: '2 bentonite, 6.7 red iron oxide, 1.3 cobalt oxide', link: 'https://glazy.org/recipes/132383', children: [ 
          { title: '30, on matte base', images: [{name: '030.jpg'}]}]
        },{name: 'Flux', recipe: '50 Ferro Fritt 3134, 15 Nepheline Syenite, 15 Silica, 15 Whiting, 5 EP Kaolin, 2 bentonite', link: 'https://glazy.org/recipes/246933', children: [ 
          { title: '35', images: [{name: '064.jpg', notes: 'glaze 35 on top of glaze 42, test tiles 64'},{name: '065.jpg', notes: 'glaze 35 on top of glaze 9, test tiles 65'},{name: '035-2.jpg', notes: 'glaze 2 applied heavily on the lip with glaze 35 on top'}]}]
        },{name: 'Misty', recipe: '2 bentonite, 5 titanium, 4 manganese', link: 'https://glazy.org/recipes/245483', children: [ 
          { title: '41, on glossy base', images: [{name: '041.jpg'},{name: '041-2.jpg', notes: "doesn't merge well, especially when applied thick"},{name: '041-3.jpg'}]}]
        },{name: 'Iron', recipe: '2 bentonite, 10 RIO, 2.5 titanium', link: 'https://glazy.org/recipes/238642', children: [ 
          { title: '42, on glossy base', images: [{name: '042.jpg'},{name: '064.jpg', notes:'also on test tiles 64 with flux 35 on top'}, {name: '042-2.jpg'}]}]
        },{name: 'Orange', recipe: '2 bentonite, 2.5 titanium, 10 rutile', link: 'https://glazy.org/recipes/238642', children: [ 
          { title: '43, on glossy base', images: [{name: '043.jpg'},{name: '043-2.jpg', notes: 'not very smooth'},{name: '014-3.jpg', notes:'merges nicely with glaze 14'},{name: '043-4.jpg', notes: 'does not merge very nicely with glaze 42'}]}]
        },{name: 'Pink', recipe: '2 bentonite, 2.5 titanium, 4 tin', link: 'https://glazy.org/recipes/238642', children: [ 
          { title: '44, on glossy base', images: [{name: '044.jpg'},{name: '072.jpg', notes:'glaze 44 on top of glaze 10, test tiles 72'},{name: '044-2.jpg', notes:'spots of 44 on top of 10, very nice and controllable'}]}]
        },{name: 'Strontium manganese', recipe: '3 Manganese', link: 'https://glazy.org/recipes/39066', children: [ 
          { title: '45, on strontium base', images: [{name: '045.jpg'}]}]
        },{name: 'Strontium copper', recipe: '3 Copper', link: 'https://glazy.org/recipes/39066', children: [ 
          { title: '46, on strontium base', images: [{name: '046.jpg'}]}]
        },{name: 'Strontium Iron', recipe: '3 Iron, 1.5 Manganese', link: 'https://glazy.org/recipes/39066', children: [ 
          { title: '47, on strontium base', images: [{name: '047.jpg'}]}]
        },{name: 'Strontium cobalt', recipe: '1.5 Copper, 0.5 Cobalt', link: 'https://glazy.org/recipes/39066', children: [ 
          { title: '48, on strontium base', images: [{name: '048.jpg'}]}]
        },{name: 'Black stain', recipe: '6 Black stain', link: '', children: [ 
          { title: '49, on glossy base', images: [{name: '049.jpg'}]},
          { title: '74, on matte base', images: [{name: '074.jpg'}]}]
        },
      ] 
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
