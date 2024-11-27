document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null, // Use viewport as the container
    threshold: 0.6, // Trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach((nav) => nav.classList.remove("active"));
        // Add active class to the current link
        link.classList.add("active");
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});
