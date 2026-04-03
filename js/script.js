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
    img: "img/staff/dimas ramadan.webp",
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

const cardEl = document.getElementById("card");
staff.map((item) => {
  cardEl.innerHTML += `
    <div class="staff-card ${item.class}">
      <img class="staff-img" src="${item.img}" alt="${item.name}" />
      <div class="staff-info">
        <h3 class="staff-name">${item.name}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
  `;
});
