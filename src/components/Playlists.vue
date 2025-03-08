<template>
    <div>
        <h2>Playlists</h2>
        <Transition name="slide-right">
        <div v-show="!selected" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8">
            <div v-for="playlist of playlists" @click="playlistSelected(playlist)" class="cursor-pointer group">
                <img class="opacity-30 group-hover:opacity-100" :src="'/images/playlists/' + playlist.image"   />
                <h5 class="relative -top-1/2 text-center group-hover:opacity-0 text-white">{{ playlist.title}} </h5>
            </div>
        </div>
        </Transition>
        <!-- <Transition name="fade"> -->
        <div v-show="selected">
                <div class=" justify-self-center">
                    <button @click="stopPlaylist" class="button mb-4">< return</button>
                    <div class=" h-[70vh] w-[80vw]" id="player"></div>
                </div>
        </div>
    <!-- </Transition> -->
    </div>
</template>


<script lang="ts">

  interface PlaylistItem {
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
        playlists:[{title: 'Midnight dreams', image: 'midnight-dreams.jpg', path: 'PL2REN8gs_cflDzxFXZlJd7hz3IcbVRqRY'},
            {title: 'Instrumental', image: 'instumental.jpg',path: 'PL2REN8gs_cfl86RW3M-wIrr3W0TCcOeyh'},
            {title: 'Postrock', image: 'post-rock.jpg',path: 'PL2REN8gs_cfmj-EESNWbAt9-BwMx7S3eE'},
            {title: 'Oldies', image: 'oldies.jpg',path: 'PL2REN8gs_cfkx-mB5ALT4no7iD-nIONPG'},
            {title: 'Jazzy', image: 'jazzy.jpg',path: 'PL2REN8gs_cfmXBM1Dr-ot7nZy3nPX7alD'},
            {title: 'Lalalala', image: 'lalala.jpg',path: 'PL99rnF7118_wEWILICSW9mkidJhSHO2Wg'},
            {title: 'Kat', image: 'kat.jpg',path: 'PL2REN8gs_cflkobWChDVtinrrgAu30dgY'},
            {title: 'Smooth', image: 'smooth.jpg',path: 'PL2REN8gs_cfl1DcQp6WGOyoJOy3eW0p8g'},
            {title: 'Holly molly', image: 'holly-molly.jpg',path: 'PL2REN8gs_cfnm9z8WM6oimwcNW9fG8Bea'},
            {title: 'Relaxation', image: 'relaxation.jpg',path: 'PL2REN8gs_cflGV1DH7X74Uhf9RVlj1VqM'},
            {title: 'Drifting soula', image: 'drifting-soula.jpg',path: 'PL2REN8gs_cfmogrUXf_BaDD1PYkUersdR'},
            {title: 'Groovy', image: 'groovy.jpg',path: 'PL2REN8gs_cfmuPoDWb5RNLnPwJ6BzHUFO'},
            {title: 'Floyd', image: 'floyd.jpg',path: 'PL2REN8gs_cfnPIQ1DhcibMB6HzpTaqIWX'},
            {title: 'Moby', image: 'moby.jpg',path: 'PL2REN8gs_cfm28QQ07BHSboEAKhwgQlx5'},
            {title: 'Bo', image: 'bo.jpg',path: 'PL2REN8gs_cfl6me9STJvU-D9UlYJIG6he'},
            {title: 'Paliometal', image: 'paliometal.jpg',path: 'PL2REN8gs_cfndfnR45uqSrUr9IGXXGufM'},
            {title: 'Uberchill', image: 'uberchill.jpg',path: 'PL2REN8gs_cfnxNKxhc7RSUxQXI6hU9_iT'},
            {title: 'Jack White', image: 'white.jpg', path: 'PL2REN8gs_cfnD_Gb-rBO081ZFLntV3Hcs'},
        ] as PlaylistItem[],
        player: undefined as any,
        playListArrayLength: 0,
        arrayTracker: [] as number[], // This holds all song numbers to make sure we through each one before start over again (not true random)
        randNumber: 0, // The random number we produce
        newNumber: 0, // The song number, the random number matches
        ignoreEvents: false,
        firstLoad: true,
        selected: false,
    }),
    methods: {
        playlistSelected(item:PlaylistItem) {
            this.selected = true;
            if (this.player) {
                this.player.loadPlaylist({
                    'listType': 'playlist',
                    'list': item.path,
                });
            }
        },
        mountYouTubeApi() {
            let firstScriptTag = document.getElementsByTagName('script')[0];
            // check if already loaded
            if (!firstScriptTag.src.includes('youtube')) {
                let tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
                (window as any).onYouTubeIframeAPIReady = this.initPlayer;
            } else {
                this.initPlayer();
            }
        },
        initPlayer() {
            const playerEl = document.getElementById('player');
            const _ = this;
            this.player = new (window as any).YT.Player(playerEl, {
                width: '100%',
                height: '100%',
                events: {
                    onStateChange: _.onPlayerStateChange
                }
            });
        },
        onPlayerStateChange(event:any) {
            // event data
            // -1 (unstarted)
            // 0 (ended)
            // 1 (playing)
            // 2 (paused)
            // 3 (buffering)
            // 5 (video cued)
            let _ = this;
            if (this.firstLoad) {
                // If first load, set up variables. For some reason randomising first song doesn't work
                this.ignoreEvents = true;
                this.playListArrayLength = this.player.getPlaylist().length;
                this.createArray();
                setTimeout(function(){
                    _.ignoreEvents = false;
                }, 2000);
                
            // This used to work just with the ENDED state, but the player is no longer entering the ended state unless the whole playlist endss (playing the last song)
            } else if ((event.data == -1 || event.data == 0) && !this.ignoreEvents) {
                console.log('playing track')
                this.playTrack();
                this.ignoreEvents = true;
                // This is to prevent multiple loops where starting a new video fires up the unstarted event which makes us fiere a new video etc
                setTimeout(function(){
                    _.ignoreEvents = false;
                }, 2000);
            }
        },
        newRandomNumber():number {
            if (this.arrayTracker.length > 0) {
                this.randNumber = Math.floor(Math.random() * this.arrayTracker.length);
                this.newNumber = this.arrayTracker[this.randNumber];
                this.arrayTracker.splice(this.randNumber, 1);
                return this.newNumber;
            } else {
                // if our array of songs finishes, recreate it.
                this.createArray();
                this.newRandomNumber();
            }
            return 0; // should never get here
        },
        createArray():void {
            for (let i = 0; i < this.playListArrayLength; i++) {
                this.arrayTracker.push(i);
            }
            if (this.firstLoad) {
                this.firstLoad = false;
                this.arrayTracker.splice(0, 1);
            }
        },
        stopPlaylist() {
            this.selected = false;
            this.firstLoad = true;
            if (this.player) {
                this.player.stopVideo();
            }
        },
        playTrack() {
            let _ = this;
            this.player.playVideoAt(this.newRandomNumber());
            // This is to handle songs with errors
            setTimeout(function(){
                if (_.player.getPlayerState() == -1){
                    _.playTrack();
                }
            }, 2000);
        }
    },
    computed: {
    },
    watch: {
    },
    mounted () {
        // window.onYouTubeIframeAPIReady = this.initPlayer();
        this.mountYouTubeApi();
    }
  }

</script>

<style lang="scss" scoped>
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition: all 0.4s ease-out;
    }
    .fade-enter-active,
    .fade-leave-active  {
        transition: all 1.4s ease-out;
    }
  
  
    .slide-right-enter-from {
        transform: translateX(-100vw);
        // opacity: 0;
    }
    .slide-right-leave-to {
        transform: translateX(-100vw);
        // opacity: 0;
    }
    .fade-enter-from {
        // transform: translateX(100vw);
        opacity: 0;
    }
    .fade-leave-to {
        // transform: translateX(100vw);
        opacity: 0;
    }
</style>