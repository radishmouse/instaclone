// Instaclone!
const IMAGES = [
    "https://scontent-sjc3-1.cdninstagram.com/vp/54a8da585c48cc60b0f4cddc6d520550/5C5F929F/t51.2885-15/e35/39356533_2097180177200225_2485126450366119936_n.jpg",
    "https://scontent-sjc3-1.cdninstagram.com/vp/34f7ade8a4fe3b18c51b784591271ab1/5C60D8C4/t51.2885-15/e35/39309330_497705957372805_1938929854401478656_n.jpg",
    "https://scontent-sjc3-1.cdninstagram.com/vp/16fc6163cf9026578771dd056c553ee4/5C507411/t51.2885-15/e35/38753626_293030034614624_3652947776343375872_n.jpg"
];

// ===================================================
// DOM element queries
// ===================================================
const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');

// ===================================================
// Element creation functions
// ===================================================

// function that generates an img element
function createImage(imageURL) {
    const theImage = document.createElement('img');
    
    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function (event) {
        console.log('hello!');
        // the element that got clicked is accessible
        // as `event.target`
        // And, I can read the `src` attribute!
        console.log(event.target.src);

        // I can now set the output image's src
        // to event.target.src!
        outputElement.setAttribute('src', event.target.src);
        // modalElement.classList.toggle('modal-hidden');
        // "remove" is more specific, so we'll use that. yeah!
        modalElement.classList.remove('modal-hidden');
    });

    
    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(imageURL){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageURL);
    theContainer.appendChild(image);

    return theContainer;
}

// ===================================================
// Main: starts the app
// ===================================================
function main() {
    // Make the thumbnails
    IMAGES.forEach(function (anImageUrl) {

        // We pass that image URL to our createThumbnail func
        let aThumbnail = createThumbnail(anImageUrl);
    
        // then append that thumbnail to the page.
        thumbnailContainer.appendChild(aThumbnail);
    });
    
    // Add global modal-closers
    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
            console.log('I want to hide the modal!');
            modalElement.classList.add('modal-hidden');
        }
    }); 
    modalElement.addEventListener('click', function (event) {
        console.log('I want to hide the modal!');
        modalElement.classList.add('modal-hidden');
    });
    
}

