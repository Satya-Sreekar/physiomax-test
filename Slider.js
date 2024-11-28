const sliderTrack = document.querySelector(".slider-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
let startX = 0; // Starting touch position (X-axis)
let moveX = 0; // Movement during touch
let isDragging = false;

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
const autoSlideInterval = 2000; // 3000ms = 3 seconds
let autoSlide = setInterval(goToNextSlide, autoSlideInterval);

// Pause sliding when hovering over slider
sliderTrack.addEventListener("mouseover", () => clearInterval(autoSlide));
sliderTrack.addEventListener("mouseout", () => {
  autoSlide = setInterval(goToNextSlide, autoSlideInterval);
});

// Touch functionality for mobile
sliderTrack.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX; // Get the initial touch position
  isDragging = true;
  clearInterval(autoSlide); // Pause auto-slide on touch
});

sliderTrack.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  moveX = e.touches[0].clientX - startX;
});

sliderTrack.addEventListener("touchend", () => {
  if (!isDragging) return;
  isDragging = false;

  // Determine slide direction
  if (moveX > 50) {
    // Swipe right -> previous slide
    goToPreviousSlide();
  } else if (moveX < -50) {
    // Swipe left -> next slide
    goToNextSlide();
  }

  // Reset values
  moveX = 0;
  autoSlide = setInterval(goToNextSlide, autoSlideInterval); // Resume auto-slide
});

// Ensure slider resizes correctly on window resize
window.addEventListener("resize", updateSliderPosition);
