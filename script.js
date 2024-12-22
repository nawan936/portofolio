// toggel class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamberger menu di klik
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah halaman reload ke home
  navbarNav.classList.toggle("active");
});

// klik di luar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
