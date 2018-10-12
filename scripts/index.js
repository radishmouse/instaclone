// Instaclone!
const IMAGES = [
    "https://scontent-sjc3-1.cdninstagram.com/vp/54a8da585c48cc60b0f4cddc6d520550/5C5F929F/t51.2885-15/e35/39356533_2097180177200225_2485126450366119936_n.jpg",
    "https://scontent-sjc3-1.cdninstagram.com/vp/34f7ade8a4fe3b18c51b784591271ab1/5C60D8C4/t51.2885-15/e35/39309330_497705957372805_1938929854401478656_n.jpg",
    "https://scontent-sjc3-1.cdninstagram.com/vp/16fc6163cf9026578771dd056c553ee4/5C507411/t51.2885-15/e35/38753626_293030034614624_3652947776343375872_n.jpg"
];

// Alternate version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGES = [
//     "images/oakley-1.jpg",
//     "images/milla-666.jpg",
//     "images/oakley-2.jpg"
// ];

// function that generates the thumbnail div
// function that generates an img element
function createImage(imageURL) {
    const theImage = document.createElement('img');

    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    return theImage;
}
