document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.querySelector(".slider-track");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;
  let autoSlide;

  // Function to update the slider position
  function updateSliderPosition() {
    const slideWidth = document.querySelector(".testimonial").offsetWidth;
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
  prevButton.addEventListener("click", (event) => {
    event.stopPropagation();
    goToPreviousSlide();
  });

  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    goToNextSlide();
  });

  // Set up automatic sliding
  const autoSlideInterval = 3000; // 3000ms = 3 seconds
  function startAutoSlide() {
    autoSlide = setInterval(goToNextSlide, autoSlideInterval);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  startAutoSlide();

  // Pause sliding when hovering over slider
  sliderTrack.addEventListener("mouseover", stopAutoSlide);
  sliderTrack.addEventListener("mouseout", startAutoSlide);

  // Ensure slider resizes correctly on window resize
  window.addEventListener("resize", updateSliderPosition);

  // Touch Gesture Support for Mobile
  let startX = 0;
  let isDragging = false;

  // Start touch event
  sliderTrack.addEventListener("touchstart", (event) => {
    isDragging = true;
    startX = event.touches[0].clientX;
    stopAutoSlide(); // Stop auto sliding during touch
  });

  // Move touch event
  sliderTrack.addEventListener("touchmove", (event) => {
    if (!isDragging) return;
    const currentX = event.touches[0].clientX;
    const diff = startX - currentX;

    // Detect swipe direction
    if (diff > 50) {
      goToNextSlide(); // Swipe left
      isDragging = false;
    } else if (diff < -50) {
      goToPreviousSlide(); // Swipe right
      isDragging = false;
    }
  });

  // End touch event
  sliderTrack.addEventListener("touchend", () => {
    isDragging = false;
    startAutoSlide(); // Resume auto sliding
  });

  // Initialize slider position on load
  updateSliderPosition();
});
