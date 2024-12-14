const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

const hamburgerButton = document.getElementById("hamburger-button");
const sidebar = document.getElementById("sidebar");
const closeSidebarButton = document.getElementById("close-sidebar");

hamburgerButton.addEventListener("click", function () {
  sidebar.classList.toggle("translate-x-full"); // Slide in the sidebar
});

closeSidebarButton.addEventListener("click", function () {
  sidebar.classList.add("translate-x-full"); // Slide out the sidebar
});
