// Function to animate the counter
const counters = document.querySelectorAll(".counter-number");

// Check if the counters are in the viewport
const animateCounters = () => {
  const triggerPoint = window.innerHeight * 0.8; // Trigger animation when 80% of the section is visible

  counters.forEach((counter) => {
    const position = counter.getBoundingClientRect().top;

    if (position < triggerPoint && !counter.classList.contains("counted")) {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = 500; // Higher value means faster counting

      const increment = target / speed;

      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.textContent = Math.round(count);
      }, 1);

      // Mark the counter as animated to prevent it from animating again
      counter.classList.add("counted");
    }
  });
};

// Add scroll event listener to animate counters when they come into view
window.addEventListener("scroll", animateCounters);

// Also check if counters are visible when the page loads
window.addEventListener("load", animateCounters);
