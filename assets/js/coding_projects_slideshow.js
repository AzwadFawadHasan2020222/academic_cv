// Arrays of image URLs for each image tag
const slideshows = {
    slideshowimg1: [
        "assets/img/projects/openTheDoor/edit1.jpg",
        "assets/img/projects/openTheDoor/openTheDoor1.png",
        "assets/img/projects/openTheDoor/openTheDoor2.png",
        "assets/img/projects/openTheDoor/openTheDoor3.png",
    ],
    slideshowimg2: [
        "assets/img/projects/jumpMilo/jumpMilo1.png",
        "assets/img/projects/jumpMilo/jumpMilo2.png",
        "assets/img/projects/jumpMilo/jumpMilo3.jpg",
        "assets/img/projects/jumpMilo/jumpMilo12.jpg",
    ],
    slideshowimg3: [
        "assets/img/projects/pointAndShootGame/pointAndShootGame.jpg",
        "assets/img/projects/pointAndShootGame/pointAndShootGame2.jpg",
        "assets/img/projects/pointAndShootGame/pointAndShootGame3.jpg",
    ]
    // Repeat for all other image tags
};

// Store the current index for each slideshow
const currentIndex = {
    slideshowimg1: 0,
    slideshowimg2: 0,
    slideshowimg3: 0
    // Repeat for all other image tags
};

// Function to update each slideshow
function updateSlideshow(id) {
    const imgElement = document.getElementById(id);
    const images = slideshows[id];
    imgElement.src = images[currentIndex[id]];
    currentIndex[id] = (currentIndex[id] + 1) % images.length;
}

// Start slideshows with different intervals if needed
setInterval(() => updateSlideshow("slideshowimg1"), 3000);  // Change image every 3 seconds for img 1
setInterval(() => updateSlideshow("slideshowimg2"), 2500);  // Change image every 4 seconds for img 2
setInterval(() => updateSlideshow("slideshowimg3"), 3000);  // Change image every 5 seconds for img 3
// Repeat for all other image tags
