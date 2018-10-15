// Instaclone!
const IMAGES = [
    {url:   "https://scontent-sjc3-1.cdninstagram.com/vp/54a8da585c48cc60b0f4cddc6d520550/5C5F929F/t51.2885-15/e35/39356533_2097180177200225_2485126450366119936_n.jpg", 
    alt: "beautiful amazing cat lying down"
    },
    {url:   "https://scontent-sjc3-1.cdninstagram.com/vp/34f7ade8a4fe3b18c51b784591271ab1/5C60D8C4/t51.2885-15/e35/39309330_497705957372805_1938929854401478656_n.jpg", 
    alt: "two beautiful amazing cats"
    },
    {url:   "https://scontent-sjc3-1.cdninstagram.com/vp/16fc6163cf9026578771dd056c553ee4/5C507411/t51.2885-15/e35/38753626_293030034614624_3652947776343375872_n.jpg", 
    alt: "beautiful amazing cat watching you"
    }
];

// Alternate version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGES = [
//     "images/oakley-1.jpg",
//     "images/milla-666.jpg",
//     "images/oakley-2.jpg"
// ];

const outputElement = document.querySelector('[data-output]');

// function that generates an img element
function createImage(imageInfo) {
    const theImage = document.createElement('img');
    
    // theImage.src = imageInfo;
    // debugger;
    theImage.setAttribute('src', imageInfo.url);
    theImage.setAttribute('alt', imageInfo.alt);
    theImage.setAttribute('title', imageInfo.alt);

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
    });

    
    return theImage;
}



// function that generates the thumbnail div
function createThumbnail(imageInfo){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageInfo);
    theContainer.appendChild(image);

    return theContainer;
}

// just draw a thumbnail to the body
// so we can test the clicky mc clickersonability
// let firstImageURL = IMAGES[0];

// Loop through the IMAGES array.
// For each image, call the anonymous function.
// The anon func should expect to receive an image URL
IMAGES.forEach(function (singleImageInfo) {

    // We pass that image URL to our createThumbnail func
    // debugger;
    let testThumb = createThumbnail(singleImageInfo);

    // then append that thumbnail to the page.
    document.body.appendChild(testThumb);
});

