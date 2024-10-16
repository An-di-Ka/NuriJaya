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
  span1.classList.toggle("span-satu");
  span2.classList.toggle("span-dua");
  span3.classList.toggle("span-tiga");
});

// klik diluar nav untuk menghilangkan
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

  // NavBar
  navBar.classList.toggle("dark-mode");
  document.querySelector("nav ul li .home").classList.toggle("dark-mode");
  document.querySelector("nav ul li .about").classList.toggle("dark-mode");
  document.querySelector("nav ul li .galeri").classList.toggle("dark-mode");
  navItems.classList.toggle("dark-mode");

  document
    .querySelector("nav .hamburger span:nth-child(1)")
    .classList.toggle("dark-mode");
  document
    .querySelector("nav .hamburger span:nth-child(2)")
    .classList.toggle("dark-mode");
  document
    .querySelector("nav .hamburger span:nth-child(3)")
    .classList.toggle("dark-mode");
  
    
  // Home
  document
    .querySelector("section .container .light-img")
    .classList.toggle("pasif");
  document
    .querySelector("section .container .dark-img")
    .classList.toggle("aktif");

  document.querySelector("section#home").classList.toggle("dark-mode");
  document
    .querySelector("section#home .container .kata h1")
    .classList.toggle("dark-mode");
  document
    .querySelector("section#home .container .kata p")
    .classList.toggle("dark-mode");

  // About
  document.querySelector("section#about").classList.toggle("dark-mode");
  document
    .querySelector("section#about .container .kanan h4")
    .classList.toggle("dark-mode");
  document
    .querySelector("section#about .container .kanan p")
    .classList.toggle("dark-mode");
  document
    .querySelector("section#about .container .kanan em")
    .classList.toggle("dark-mode");
  document
    .querySelector("section#about .container .kiri h4")
    .classList.toggle("dark-mode");
  document
    .querySelector("section#about .container .kiri p")
    .classList.toggle("dark-mode");

  // Galeri
  document.querySelector("section#galeri").classList.toggle("dark-mode");
  document
    .querySelector("section#galeri .gambar")
    .classList.toggle("dark-mode");

  document
    .querySelector("#galeri .container .gambar .kepala .masri")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .kepala .nur")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .murdi img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .santo img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .rohaila img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .lina img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .dimas img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .nia img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .yani img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .dela img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .nakni img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .dewi img")
    .classList.toggle("dark-mode");
  document
    .querySelector("#galeri .container .gambar .anggota .dika img")
    .classList.toggle("dark-mode");
});
