document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".dropdown-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = toggle.getAttribute("data-target");
      const dropdown = document.getElementById(targetId);

      const isOpen = dropdown.style.display === "block";

      // Close all dropdowns
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none";
      });
      document.querySelectorAll(".dropdown-toggle").forEach(btn => {
        btn.classList.remove("active");
      });

      // Toggle selected
      if (!isOpen) {
        dropdown.style.display = "block";
        toggle.classList.add("active");
      }
    });
  });

  // Close dropdowns if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none";
      });
      document.querySelectorAll(".dropdown-toggle").forEach(btn => {
        btn.classList.remove("active");
      });
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileToggle.addEventListener("click", () => {
    if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "flex";
    }
  });
});