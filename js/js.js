// Navbar Fixed Scroll muncul shadow
window.onscroll = function () {
  const nav = document.querySelector("nav");
  const fixesNav = nav.offsetTop;

  if (window.pageYOffset > fixesNav) {
    nav.classList.add("flow");
  } else {
    nav.classList.remove("flow");
  }
};

// hamburger menu
const hamburger = document.querySelector("#hamburger");
const navItems = document.querySelector("nav .items");
const span1 = document.querySelector("nav .hamburger span:nth-child(1)");
const span2 = document.querySelector("nav .hamburger span:nth-child(2)");
const span3 = document.querySelector("nav .hamburger span:nth-child(3)");

hamburger.addEventListener("click", function () {
  navItems.classList.toggle("active-items");

  // Silang pada hamburger klik
  // span1.classList.toggle("span-satu");
  // span2.classList.toggle("span-dua");
  // span3.classList.toggle("span-tiga");
});

// klik diluar nav untuk menghilangkan navber
const navBar = document.querySelector("nav");

document.addEventListener("click", function (e) {
  if (!navBar.contains(e.target)) {
    navItems.classList.remove("active-items");
    span1.classList.remove("span-satu");
    span2.classList.remove("span-dua");
    span3.classList.remove("span-tiga");
  }
});

// dark-btn & dark-mode
// Dark Mode Button
const darkBtn = document.querySelector(".lonjong");
const bulet = document.querySelector(".bulet");

darkBtn.addEventListener("click", function () {
  bulet.classList.toggle("geser");

  // Color-Scheme HTML
  document.querySelector("html").classList.toggle("dark-mode");

  // Hero Image
  document
    .querySelector("section .container .light-img")
    .classList.toggle("pasif");
  document
    .querySelector("section .container .dark-img")
    .classList.toggle("aktif");
});
