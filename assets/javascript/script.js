
// import my array of objects generated dinamically
import { games } from "./Functions/urlgenerator.js";

const { createApp } = Vue

createApp({
    data() {
        return {

            imgPosition: 0,
            gameList: games,
            activeClass: "active",
            interval: null,
            onGoing: null

        }
    },

    methods: {

        nextImage() {

            this.imgPosition++

            if (this.imgPosition > games.length - 1) {

                this.imgPosition = 0

            }
        },

        prevImage () {

            this.imgPosition--
            
            if(this.imgPosition < 0) {

                this.imgPosition = games.length - 1

            }
        },

        selectedThumb (index) {

            this.imgPosition = index
    
        },

        autoPlay () {

            this.onGoing = true

            this.interval = setInterval(() => {

                this.nextImage()

            }, 3000);
        },

        stopPlay () {

            this.onGoing = false

            this.interval = clearInterval(this.interval)

        }
    },
    mounted () {

        this.autoPlay()

    }
}).mount('#app')

