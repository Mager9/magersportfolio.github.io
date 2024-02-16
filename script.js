document.addEventListener("DOMContentLoaded", function() {
  // Add loading animation
  const loader = document.querySelector(".loader");
  loader.style.display = "block";

  // Hide loader after a delay (simulating loading)
  setTimeout(function() {
    loader.style.display = "none";
    // Add scroll animation
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      section.style.opacity = "0";
    });

    window.addEventListener("scroll", function() {
      sections.forEach(section => {
        if (isElementInViewport(section)) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    });

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }, 2000);
});
