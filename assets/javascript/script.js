
// import my array of objects generated dinamically
import { games } from "./Functions/urlgenerator.js";

// import function to generate slides
import { createSlides } from "./Functions/slides.js";

// import function to generate thumbnail
import { createThumbs } from "./Functions/thumbs.js";

// import function for adding class
import { classAdder } from "./Functions/helper/class-adder.js";

// import function for removing class
import { classRemover } from "./Functions/helper/class-remover.js";

// import nodeLists management function
import { nodeListOfNodeLists } from "./Functions/nodelists.js";

const { createApp } = Vue

createApp({
    data() {
        return {

            imgPosition: 0,
            gameList: games,
            activeClass: "active"

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
        }
    }
}).mount('#app')

console.log(games)




// // arrow function for next image

// const nextImage = () => {

//     everyNodeList.forEach(element => {

//         classRemover(element, imgPosition, "active");

//     })

//     imgPosition++;

//     if (imgPosition > games.length - 1) {

//         imgPosition = 0;

//         everyNodeList.forEach(element => {

//             classAdder(element, imgPosition, "active");

//         })

//     } else {

//         everyNodeList.forEach(element => {

//             classAdder(element, imgPosition, "active");

//         })

//     }

// }

// // arrow function for previous image

// const previousImage = () => {

//     everyNodeList.forEach(element => {

//         classRemover(element, imgPosition, "active");

//     })

//     imgPosition--;

//     if (imgPosition < 0) {

//         imgPosition = games.length - 1;

//         everyNodeList.forEach(element => {

//             classAdder(element, imgPosition, "active");

//         })


//     } else {

//         everyNodeList.forEach(element => {

//             classAdder(element, imgPosition, "active");

//         })
//     }

// }

// // interval for scrolling images forward every tot seconds
// let forwardImages = setInterval(nextImage, 3000);

// // taking start auto-play button
// const startButton = document.querySelector(".start");

// // taking stop auto-play button
// const stopButton = document.querySelector(".stop");

// // takin reverse auto-play button
// const reverseButton = document.querySelector(".reverse");

// // event listener to start auto-play
// startButton.addEventListener("click", function () {

//     clearInterval(forwardImages);

//     clearInterval(reverseImages);

//     everyNodeList.forEach(element => {

//         classRemover(element, imgPosition, "active");

//     })

//     imgPosition = 0;

//     everyNodeList.forEach(element => {

//         classAdder(element, imgPosition, "active");

//     })

//     forwardImages = setInterval(nextImage, 3000);
// })

// // event listener to stop auto-play

// stopButton.addEventListener("click", function () {

//     clearInterval(forwardImages);

//     clearInterval(reverseImages);

// })

// // event listener for reverse auto-play

// let reverseImages;

// reverseButton.addEventListener("click", function () {

//     clearInterval(forwardImages);

//     reverseImages = setInterval(previousImage, 3000);
// })
