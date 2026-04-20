const staff = [
  {
    class: "owner",
    name: "Masriono",
    img: "img/owner/masriono.jpg",
    desc: "Ketua",
  },
  {
    class: "owner",
    name: "Nur Lestari",
    img: "img/owner/nur lestari.jpg",
    desc: "Ketua",
  },
  {
    class: "staff",
    name: "Murdianto ⚖️",
    img: "img/staff/murdianto.webp",
    position: "Karyawan",
    desc: "Penjaga pasar sayur dan stok timbangan",
  },
  {
    class: "staff",
    name: "Susanto 📒",
    img: "img/staff/susanto.webp",
    position: "Karyawan",
    desc: "Maintenans toko pasar dan stok bahan",
  },
  {
    class: "staff",
    name: "Rohaila 💵",
    img: "img/staff/rohaila.webp",
    position: "Karyawan",
    desc: "Pengelola pengadaan barang dan laba rugi",
  },
  {
    class: "staff",
    name: "Linawati 💵",
    img: "img/staff/linawati.webp",
    position: "Karyawan",
    desc: "Pengelola pengadaan barang dan laba rugi",
  },
  {
    class: "staff",
    name: "Dimas Ramadan 👷‍♂️",
    img: "img/staff/dimas ramadan.webp",
    position: "Karyawan",
    desc: "Tulang punggung barang gudang",
  },
  {
    class: "staff",
    name: "Andika 👷‍♂️",
    img: "img/staff/andika.webp",
    position: "Karyawan",
    desc: "Tulang punggung barang gudang",
  },
  {
    class: "staff",
    name: "Jefri Ali Fernando 👷‍♂️",
    img: "img/staff/jefri ali fernando.jpg",
    position: "Karyawan",
    desc: "Tulang punggung barang gudang",
  },
  {
    class: "staff",
    name: "Dwi Cahyani 🧺",
    img: "img/staff/dwi cahyani.webp",
    position: "Karyawan",
    desc: "Mitigasi rak dan pengalola transaksi",
  },
  {
    class: "staff",
    name: "Arina Khusnawati..🧺",
    img: "img/staff/arina khusnawati istiqomah.webp",
    position: "Karyawan",
    desc: "Mitigasi rak dan pengalola transaksi",
  },
  {
    class: "staff",
    name: "Made Wiratni 🧺",
    img: "img/staff/made wiratni.webp",
    position: "Karyawan",
    desc: "Mitigasi rak dan pengalola transaksi",
  },
  {
    class: "staff",
    name: "Suci Permata Sari 🧺",
    img: "img/staff/suci permata sari.webp",
    position: "Karyawan",
    desc: "Mitigasi rak dan pengalola transaksi",
  },
  {
    class: "staff",
    name: "Rika 🥬",
    img: "img/staff/rika.webp",
    position: "Karyawan",
    desc: "Semua yang berurusan dengan sayuran dan kulkas",
  },
  {
    class: "staff",
    name: "Salsabela 🧺",
    img: "img/staff/salsabela.webp",
    position: "Karyawan",
    desc: "Mitigasi rak dan pengalola transaksi",
  },
];
const activities = [
  {
    id: 1,
    title: "Syukuran",
    date: "Februari 2023",
    location: "Toko Nuri Jaya",
    desc: "Iki syukuran opo yo. Lupa saya...",
    img: "img/activities/1-syukuran.webp",
  },
  {
    id: 2,
    title: "Pantai Mutun",
    date: "Mei 2023",
    location: "Pantai Mutun",
    desc: "Ini adalah jalan-jalan pertama kami, setelah Toko Nuri Jaya dibuka. Di sini banyak sekali permainan yang kami lakukan.",
    img: "img/activities/2-pantai mutun.webp",
  },
  {
    id: 3,
    title: "Galungan",
    date: "Februari 2024",
    location: "Rumah Mbak Ela",
    desc: "Kami main ke tempat Mbak Ela yang sedang melaksanakan Hari Raya Galungan.",
    img: "img/activities/3-galungan.webp",
  },
  {
    id: 4,
    title: "Pantai Marina",
    date: "Maret 2026",
    location: "Pantai Marina",
    desc: "Di tahun kedua berdirinya Toko. Kami pergi jalan-jalan ke Pantai Marinsa.",
    img: "img/activities/4-pantai marina.webp",
  },
  {
    id: 5,
    title: "Permainan",
    date: "Maret 2026",
    location: "Toko Nuri Jaya",
    desc: "Disela-sela kesibukan kami di Toko. Ketua malah bagi-bagi hadiah.",
    img: "img/activities/5-permainan.webp",
  },
  {
    id: 6,
    title: "Mancing",
    date: "Maret 2026",
    location: "Gazebo Spontan",
    desc: "Tiba-tiba ngajal mancing. Gas lah...",
    img: "img/activities/6-mancing.webp",
  },
  {
    id: 7,
    title: "Makan-Makan",
    date: "Maret 2026",
    location: "Rumah Mbak Lina & Bang T",
    desc: "Sepertinya acara makan-makan kami belum selesai. Lanjut...",
    img: "img/activities/7-makan.webp",
  },
  {
    id: 8,
    title: "Isah-isah",
    date: "Maret 2026",
    location: "Rumah Mbak Lina & Bang-T",
    desc: "Huh 😮‍💨... <br/> Ahkirnya beres-beres juga.",
    img: "img/activities/8-cuci piring.webp",
  },
];

const cardEl = document.getElementById("card"),
  momentEl = document.getElementById("moment");

staff.map((item) => {
  cardEl.innerHTML += `
    <div class="staff-card ${item.class}">
      <img class="staff-img" src="${item.img}" alt="${item.name}" />
      <div class="staff-info">
        <h3 class="staff-name">${item.name}</h3>
        <p class="desc">${item.desc}</p>
      </div>
    </div>
  `;
});

activities.map((item) => {
  momentEl.innerHTML += `
    <div class="card-moment">
      <div class="moment-img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <div class="moment-info">
        <p class="moment-date">${item.date}</p>
        <h3 class="moment-title">${item.title}</h3>
        <p class="desc">${item.desc}</p>
        <p class="moment-location">Lokasi: ${item.location}</p>
      </div>
    </div>
  `;
});

// Handle Hamburger Menu
const hamburger = document.querySelector("#hamburger"),
  navBar = document.querySelector("nav .nav-bar"),
  span1 = document.querySelector("nav .hamburger span:nth-child(1)"),
  span2 = document.querySelector("nav .hamburger span:nth-child(2)"),
  span3 = document.querySelector("nav .hamburger span:nth-child(3)"),
  navItems = document.querySelectorAll("nav .nav-bar a"),
  navLogo = document.querySelector(".nav-logo");

hamburger.addEventListener("click", function () {
  navBar.classList.toggle("active");
  span1.classList.toggle("span-satu");
  span2.classList.toggle("span-dua");
  span3.classList.toggle("span-tiga");
});

// Klik, untuk keluar dari NavBar Mobile
navItems.forEach((item) => {
  item.addEventListener("click", removeClass);
});

function removeClass() {
  navBar.classList.remove("active");
  span1.classList.remove("span-satu");
  span2.classList.remove("span-dua");
  span3.classList.remove("span-tiga");
}
