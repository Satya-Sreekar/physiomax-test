document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]"); // Only sections with IDs
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null, // Use viewport as the container
    threshold: 0.5, // Trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Ensure the section has an ID and corresponding link exists
      const link = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );

      if (entry.isIntersecting && link) {
        // Remove 'active' class from all links
        navLinks.forEach((nav) => nav.classList.remove("active"));
        // Add 'active' class to the current link
        link.classList.add("active");
      }
    });
  }, observerOptions);

  // Observe each section that has an ID
  sections.forEach((section) => {
    if (section) {
      observer.observe(section);
    } else {
      console.warn("Section not found or missing ID:", section);
    }
  });
});
