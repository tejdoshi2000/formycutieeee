const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const collageContainer = document.querySelector(".collage-container");

// Array of image paths - replace these with your actual image paths
const imagePaths = [
'images/snowmobil1.JPEG',
'images/beauty.JPEG',
'images/cultural.JPEG',
'images/candid1.JPEG',
'images/candid2.JPEG',
'images/beauty.JPEG',
'images/makeout1.JPEG',
'images/santacruz2.JPEG',
'images/makeout2.JPEG',
'images/firstdate.JPEG',
'images/garbanight.JPEG',
'images/funny.JPEG',
'images/roseday.JPEG',
'images/snowmobil2.JPEG',
'images/snowland.JPEG',
'images/santacruz1.JPEG',
'images/cutie.JPEG',
'images/valentine.jpg',
'images/newyear.jpg',
'images/closeup.jpg',
    'images/snowmobil1.JPEG',
'images/beauty.JPEG',
'images/cultural.JPEG',
'images/candid1.JPEG',
'images/candid2.JPEG',
'images/beauty.JPEG',
'images/makeout1.JPEG',
'images/santacruz2.JPEG',
'images/makeout2.JPEG',
'images/firstdate.JPEG',
'images/garbanight.JPEG',
'images/funny.JPEG',
'images/roseday.JPEG',
'images/snowmobil2.JPEG',
'images/snowland.JPEG',
'images/santacruz1.JPEG',
'images/cutie.JPEG',
'images/valentine.jpg',
'images/newyear.jpg',
'images/closeup.jpg',
    'images/snowmobil1.JPEG',
'images/beauty.JPEG',
'images/cultural.JPEG',
'images/candid1.JPEG',
'images/candid2.JPEG',
'images/beauty.JPEG',
'images/makeout1.JPEG',
'images/santacruz2.JPEG',
'images/makeout2.JPEG',
'images/firstdate.JPEG',
'images/garbanight.JPEG',
'images/funny.JPEG',
'images/roseday.JPEG',
'images/snowmobil2.JPEG',
'images/snowland.JPEG',
'images/santacruz1.JPEG',
'images/cutie.JPEG',
'images/valentine.jpg',
'images/newyear.jpg',
'images/closeup.jpg'
];

// Function to get random image
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
}

// Function to create continuous scroll effect
function setupContinuousScroll() {
    const rows = document.querySelectorAll('.collage-row');
    
    rows.forEach(row => {
        // Clear existing content
        row.innerHTML = '';
        
        // Create container for images that will be animated
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        // Calculate how many images needed to fill screen width plus extra for smooth scroll
        const screenWidth = window.innerWidth;
        const imageWidth = window.innerHeight * 0.25; // 25vh
        const imagesNeeded = Math.ceil((screenWidth * 2) / imageWidth);
        
        // Add random images to container
        for (let i = 0; i < imagesNeeded; i++) {
            const img = document.createElement('img');
            img.src = getRandomImage();
            imageContainer.appendChild(img);
        }
        
        // Add container to row
        row.appendChild(imageContainer);
    });
}

// Function to update a single image
function updateSingleImage(img) {
    const newSrc = getRandomImage();
    // Only update if the new source is different
    if (newSrc !== img.src) {
        img.src = newSrc;
    }
}

// Function to periodically update images for continuous variety
function updateImages() {
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        const images = container.querySelectorAll('img');
        images.forEach(img => {
            // Only update if the image has scrolled out of view
            const rect = img.getBoundingClientRect();
            if (rect.right < 0 || rect.left > window.innerWidth) {
                updateSingleImage(img);
            }
        });
    });
}

function playMusicWithFadeIn() {
    backgroundMusic.volume = 0;
    backgroundMusic.play();
    
    let volume = 0;
    const fadeIn = setInterval(() => {
        if (volume < 1) {
            volume += 0.1;
            backgroundMusic.volume = volume;
        } else {
            clearInterval(fadeIn);
        }
    }, 200);
}

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you Babyyy🎉 You are special, and special people need special care...you know what baby, I don't think there's anyone else out there who can take care of you as much as I can! So you are kinda stuck with me now..and I love being stuck with you!";
    gif.src = "/images/closeup.jpg";
    
    // Hide the buttons
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    
    // Show and setup the collage
    collageContainer.style.display = "flex";
    setupContinuousScroll();

    playMusicWithFadeIn();
    
    // Start periodic image updates
    setInterval(updateImages, 3000); // Update images every 3 seconds
    
    // Add random updates for visible images occasionally
    setInterval(() => {
        const randomChance = Math.random();
        if (randomChance > 0.7) { // 30% chance to update a visible image
            const allImages = document.querySelectorAll('.image-container img');
            const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
            updateSingleImage(randomImage);
        }
    }, 2000);
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;
    
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Setup continuous scroll on page load and resize
window.addEventListener('load', setupContinuousScroll);
window.addEventListener('resize', setupContinuousScroll);
