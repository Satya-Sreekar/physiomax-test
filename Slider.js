const sliderTrack = document.querySelector(".slider-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Function to update the slider position
function updateSliderPosition() {
  const slideWidth = document.querySelector(".testimonial").clientWidth;
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Go to the previous slide
function goToPreviousSlide() {
  currentIndex = Math.max(currentIndex - 1, 0); // Prevent going before the first slide
  updateSliderPosition();
}

// Go to the next slide
function goToNextSlide() {
  const totalSlides = sliderTrack.children.length;
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  updateSliderPosition();
}

// Add event listeners for manual controls
prevButton.addEventListener("click", goToPreviousSlide);
nextButton.addEventListener("click", goToNextSlide);

// Set up automatic sliding
const autoSlideInterval = 3000; // 3000ms = 3 seconds
let autoSlide = setInterval(goToNextSlide, autoSlideInterval);

// Pause sliding when hovering over slider
sliderTrack.addEventListener("mouseover", () => clearInterval(autoSlide));
sliderTrack.addEventListener("mouseout", () => {
  autoSlide = setInterval(goToNextSlide, autoSlideInterval);
});

// Ensure slider resizes correctly on window resize
window.addEventListener("resize", updateSliderPosition);
