/* ============================================================
   Ikan Bakar Segar Ciomas, katalog ikan bakar.
   Seluruh data terpusat di bawah. Tambah/edit menu cukup
   dengan mengubah array `menuIkanBakarData`. Foto produk
   tersimpan lokal di folder `asset/`. HTML hanya berisi
   kontainer kosong, semua DOM di-render dari sini.
   ============================================================ */

const FALLBACK_IMG = 'asset/ikan-gurame-bakar.jpg';

const categoriesData = [
  { id: 'semua', label: 'Semua' },
  { id: 'air-tawar', label: 'Ikan Bakar Air Tawar' },
  { id: 'laut', label: 'Ikan Bakar Laut' },
];

const heroData = {
  titleA: 'Ikan Bakar &ldquo;Segar 99&rdquo;',
  titleB: 'Setiap Hari.',
  description:
    'Dibakar di atas api dengan bumbu rempah khas Nusantara. Pilih gurame, mujaer, kakap, atau kerapu favoritmu. Level pedas bebas request.',
  image: 'asset/ikan-gurame-bakar.jpg',
};

const tutorialData = [
  {
    title: 'Pilih Menu',
    desc: 'Telusuri katalog, klik card ikan untuk mengatur jumlah porsi yang mau dibakar.',
  },
  {
    title: 'Checkout via WhatsApp',
    desc: 'Tekan "Checkout via WhatsApp" di keranjang. Rincian pesanan terkirim otomatis ke nomor warung.',
  },
  {
    title: 'Konfirmasi Warung',
    desc: 'Tunggu balasan WhatsApp dari warung untuk konfirmasi ketersediaan ikan dan detail pesanan.',
  },
  {
    title: 'Pesan GoSend / Kurir',
    desc: 'Kami melayani ambil di tempat. Pesan GoSend Instant, GrabExpress, atau kurir lain dengan titik jemput alamat warung di atas.',
  },
  {
    title: 'Terima & Nikmati',
    desc: 'Kurir akan menjemput pesanan ke warung. Sajikan ikan bakar selagi hangat!',
  },
];

/* Stok harian: isi ID menu yang habis hari ini, mis. ['l-kakap', 'g-mujaer'].
   Kosongkan ([]) kalau semua tersedia. Card tetap tampil dengan label Habis. */
const soldOutIds = [];

/* Jam buka: 08.00-18.00 WIB setiap hari (buka jam 8, tutup jam 6).
   Satu config ini dipakai status hero, kartu lokasi, dan
   catatan checkout. Kalau jam berubah, ubah di sini saja. */
const locationData = {
  name: 'Ikan Bakar Segar Ciomas',
  address: 'Jl. Cemara VIII No.14 Blok A, Pagelaran, Kec. Ciomas, Kota Bogor 16610',
  hours: { open: '08:00', close: '18:00', label: 'Buka setiap hari · 08.00-18.00 WIB' },
  phone: '0812-9433-3260',
  whatsapp: '6281294333260',
  note: 'Klik "Petunjuk Arah" untuk rute tercepat dari lokasimu.',
  query: 'Ikan Bakar Segar Ciomas, Jl. Cemara VIII, Ciomas, Bogor',
};

/* Outlet kedua: foodcourt Kemdikbudristek, Jakarta Pusat. Tidak punya jam
   buka & nomor sendiri, jadi baris itu tidak ditampilkan (biar tidak mengarang). */
const jakartaLocation = {
  name: 'Kantin Bogasera · Kemdikbudristek',
  address: 'Jl. Jend. Sudirman No.RT.01/RW.03, Gelora, Tanah Abang, Jakarta Pusat 10270',
  hours: { open: '09:00', close: '14:00', label: 'Senin-Jumat · 09.00-14.00 WIB (kecuali hari libur)' },
  note: 'Makan di tempat di area foodcourt Kemdikbudristek, Jakarta Pusat.',
  query: 'Kantin Bogasera Kemdikbudristek, Jl. Jenderal Sudirman, Tanah Abang, Jakarta',
};

const menuIkanBakarData = [
  {
    id: 'g-gurame', name: 'Gurame Goreng', category: 'air-tawar',
    spiceTag: 'Bumbu Kecap',
    image: 'asset/ikan-gurame-bakar.jpg',
    description: 'Gurame utuh dibakar dengan olesan bumbu kecap gurih yang dikaramelisasi di atas api. Disajikan dengan sambal dabu-dabu, sambal merah, timun, dan kemangi segar.',
  },
  {
    id: 'g-gurame-mp', name: 'Ikan Gurame Bakar Manis Pedas', category: 'air-tawar',
    spiceTag: 'Bumbu Manis Pedas',
    image: 'asset/ikan-gurame-bakar-manis-pedas.jpg',
    description: 'Gurame utuh berbalut bumbu manis pedas yang meresap hingga ke daging. Dilengkapi mangkok tiga sekat berisi sambal dabu-dabu, sambal kecap, dan sambal terasi plus lalapan.',
  },
  {
    id: 'g-mujaer', name: 'Ikan Mujaer Bakar Manis Pedas', category: 'air-tawar',
    spiceTag: 'Bumbu Manis Pedas',
    image: 'asset/ikan-mujaer-bakar-manis-pedas.jpg',
    description: 'Mujaer segar berbalut bumbu manis pedas yang meresap hingga ke daging. Disajikan dengan mangkok tiga sekat berisi sambal dabu-dabu, sambal kecap, dan sambal terasi.',
  },
  {
    id: 'g-mujair', name: 'Ikan Mujair Bakar', category: 'air-tawar',
    spiceTag: 'Bumbu Kecap',
    image: 'asset/ikan-mujair-bakar.jpg',
    description: 'Mujair dibakar dengan bumbu kecap hitam mengilap yang lengket manis di kulitnya. Cocok pencinta ikan gurih-gelap, disajikan dengan sambal dabu-dabu, timun, kemangi, dan jeruk nipis.',
  },
  {
    id: 'g-mujair-goreng', name: 'Ikan Mujair Goreng', category: 'air-tawar',
    spiceTag: 'Bumbu Ungkep',
    image: 'asset/ikan-mujair-goreng.jpg',
    description: 'Mujair digoreng garing renyah sampai tulangnya ikut renyah. Disajikan dengan sambal dabu-dabu, sambal merah, irisan timun, kemangi, dan jeruk nipis.',
  },
  {
    id: 'l-bawal', name: 'Bawal Laut Bakar Manis Pedas', category: 'laut',
    spiceTag: 'Bumbu Manis Pedas',
    image: 'asset/bawal-laut-bakar-manis-pedas.jpg',
    description: 'Bawal pipih berdaging tebal dengan olesan bumbu manis pedas yang garing karamel. Disertai lalapan segar, sambal dabu-dabu, sambal terasi, dan jeruk nipis.',
  },
  {
    id: 'l-kembung', name: 'Kembung Bakar', category: 'laut',
    spiceTag: 'Bumbu Kecap',
    image: 'asset/ikan-kembung-bakar.jpg',
    description: 'Kembung segar dibakar bumbu kecap dengan aroma bakaran yang wangi. Dagingnya padat dan manis, disajikan dengan sambal dabu-dabu, timun, selada, dan jeruk nipis.',
  },
  {
    id: 'l-ikuwe', name: 'Ikan Kuwe Bakar', category: 'laut',
    spiceTag: 'Bumbu Kecap',
    image: 'asset/ikan-kuwe-bakar.jpg',
    description: 'Kuwe hasil tangkapan nelayan dibakar dengan olesan kecap gurih. Dagingnya padat dan manis, disajikan dengan sambal dabu-dabu, sambal merah, kemangi, dan timun segar.',
  },
  {
    id: 'l-kuwe-mp', name: 'Kuwe Bakar Pedas Manis', category: 'laut',
    spiceTag: 'Bumbu Manis Pedas',
    image: 'asset/kuwe-bakar-pedas-manis.jpg',
    description: 'Kuwe pipih berbumbu manis pedas dengan lapisan karamel yang gurih. Dilengkapi sambal dabu-dabu, sambal merah, selada, timun, dan jeruk nipis.',
  },
  {
    id: 'l-kakap', name: 'Kakap Bakar', category: 'laut',
    spiceTag: 'Bumbu Bakar Original',
    image: 'asset/kakap-original.jpg',
    description: 'Kakap dibakar polos di atas api tanpa baluran bumbu tebal, jadi rasa manis alami dagingnya yang menonjol. Disajikan dengan sambal bawang, sambal dabu-dabu, timun, kemangi, dan jeruk nipis.',
  },
  {
    id: 'l-kerapu', name: 'Ikan Kerapu Bakar Manis Pedas', category: 'laut',
    spiceTag: 'Bumbu Manis Pedas',
    image: 'asset/ikan-kerapu-bakar-manis-pedas.jpg',
    description: 'Kerapu berdaging kenyal juicy dengan baluran bumbu pekat manis pedas. Disajikan mewah dengan dua mangkok sambal: terasi dan dabu-dabu segar.',
  },
];

/* ---------------- State ---------------- */
const state = {
  activeCategory: 'semua',
  searchQuery: '',
  cart: new Map(),
  modal: null,
};

/* ---------------- Helpers ---------------- */
const $ = (selector) => document.querySelector(selector);

const categoryLabel = (id) => {
  const found = categoriesData.find((c) => c.id === id);
  return found ? found.label : id;
};

const getProduct = (id) => menuIkanBakarData.find((p) => p.id === id);
const isSoldOut = (id) => soldOutIds.includes(id);

/* Status buka dihitung dari jam device dalam zona Asia/Jakarta. */
function minutesNowWIB() {
  const parts = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === 'hour').value);
  const m = Number(parts.find((p) => p.type === 'minute').value);
  return h * 60 + m;
}

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const isOpenNow = () => {
  const now = minutesNowWIB();
  return now >= toMinutes(locationData.hours.open) && now < toMinutes(locationData.hours.close);
};

const openStatusText = () =>
  isOpenNow()
    ? `Buka sekarang · tutup ${locationData.hours.close.replace(':', '.')}`
    : `Tutup · buka ${locationData.hours.open.replace(':', '.')}`;


/* Klik-ke-chat WhatsApp. Default-nya ke APLIKASI, bukan WhatsApp Web:
   HP     -> `wa.me` adalah app-link, browser langsung memanggil aplikasi
             tanpa lewat halaman perantara.
   Desktop -> `wa.me` selalu singgah dulu di api.whatsapp.com (tombol
             "Buka aplikasi" / "Lanjutkan ke WhatsApp Web"), jadi dipakai
             protokol `whatsapp://send` yang langsung membuka aplikasi. */
const waLink = (text) => {
  const phone = locationData.whatsapp;
  const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const query = text ? `?text=${encodeURIComponent(text)}` : '';
  return isMobile
    ? `https://wa.me/${phone}${query}`
    : `whatsapp://send?phone=${phone}${text ? `&text=${encodeURIComponent(text)}` : ''}`;
};

/* Link WhatsApp yang ditulis langsung di index.html (header, hero statis,
   layanan) ikut disamakan, biar semuanya satu perilaku. */
function syncStaticWaLinks() {
  document.querySelectorAll('a[href*="wa.me"]').forEach((a) => {
    const text = new URL(a.href).searchParams.get('text') || '';
    a.href = waLink(text);
  });
}

function filteredMenu() {
  const q = state.searchQuery.trim().toLowerCase();
  return menuIkanBakarData.filter((p) => {
    const matchCat = state.activeCategory === 'semua' || p.category === state.activeCategory;
    const matchQuery =
      q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.spiceTag.toLowerCase().includes(q) ||
      categoryLabel(p.category).toLowerCase().includes(q);
    return matchCat && matchQuery;
  });
}

let toastTimer = null;
function showToast(message) {
  const wrap = $('#toastWrap');
  wrap.innerHTML = '';
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  wrap.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--show'));
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('toast--show');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

/* ---------------- Render: hero ---------------- */
/* Hero kini banner full-width: foto jadi background (lihat .hero di CSS),
   teks ditumpuk di area kiri. Tanpa tombol WhatsApp di hero — pesanan lewat
   header, badge platform, dan checkout keranjang. */
function renderHero() {
  const hero = $('#heroSection');
  hero.innerHTML = `
    <div class="hero__content">
      <p class="hero__eyebrow">Ikan Bakar Dadakan &middot; Ciomas, Bogor</p>
      <h1 class="hero__title">${heroData.titleA} <em>${heroData.titleB}</em></h1>
      <p class="hero__desc">${heroData.description}</p>
      <p class="hero__status${isOpenNow() ? '' : ' hero__status--closed'}" id="heroStatus"><span class="hero__dot" aria-hidden="true"></span>${openStatusText()}</p>
    </div>`;
  startStatusTicker();
}

/* Status buka/tutup dirender ulang tiap 30 detik supaya dot & teks ikut
   berubah saat warung buka/tutup walau halaman dibiarkan terbuka. */
function startStatusTicker() {
  const apply = () => {
    const el = $('#heroStatus');
    if (!el) return;
    el.classList.toggle('hero__status--closed', !isOpenNow());
    el.lastChild.textContent = openStatusText();
    const inline = $('#openStatusInline');
    if (inline) inline.textContent = openStatusText();
  };
  apply();
  setInterval(apply, 30000);
}

/* ---------------- Render: location ---------------- */
function renderLocation() {
  const section = $('#lokasi');

  const pinIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
  const clockIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>';
  const phoneIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
  const takeawayIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>';
  const dineInIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 2v7a3 3 0 0 0 6 0V2"></path><path d="M6 2v20"></path><path d="M18 2c-1.7 0-3 1.8-3 4s1.3 4 3 4v12"></path><path d="M18 2v8"></path></svg>';

  const locations = [
    {
      heading: 'Hubungi Kami',
      name: locationData.name,
      badge: 'Khusus Takeaway',
      badgeIcon: takeawayIcon,
      info: 'Bisa dibungkus untuk dibawa pulang &mdash; pesan dulu lewat WhatsApp supaya tinggal ambil.',
      rows: [
        `${pinIcon}<span>${locationData.address}</span>`,
        `${clockIcon}<span>${locationData.hours.label} · <strong id="openStatusInline">${openStatusText()}</strong></span>`,
        `${phoneIcon}<a class="location__link" href="tel:+${locationData.whatsapp}">${locationData.phone}</a>`,
      ],
      note: locationData.note,
      query: locationData.query,
    },
    {
      heading: 'Kunjungi Foodcourt Kami',
      name: jakartaLocation.name,
      badge: 'Dine In',
      badgeIcon: dineInIcon,
      info: jakartaLocation.note,
      rows: [
        `${pinIcon}<span>${jakartaLocation.address}</span>`,
        `${clockIcon}<span>${jakartaLocation.hours.label}</span>`,
      ],
      note: 'Klik "Petunjuk Arah" untuk rute tercepat dari lokasimu.',
      query: jakartaLocation.query,
    },
  ];

  const cards = locations
    .map((loc) => {
      const q = encodeURIComponent(loc.query);
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;
      const dirUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
      return `
      <div class="location__card">
        <h2 class="location__title">${loc.heading}</h2>
        <div class="location__name-row">
          <p class="location__name">${loc.name}</p>
          <span class="location__badge">${loc.badgeIcon}${loc.badge}</span>
        </div>
        <p class="location__info">${loc.info}</p>
        ${loc.rows.map((row) => `<p class="location__row">${row}</p>`).join('')}
        <p class="location__note">${loc.note}</p>
        <div class="location__actions">
          <a class="location__btn location__btn--primary" href="${mapsUrl}" target="_blank" rel="noopener">Buka di Google Maps</a>
          <a class="location__btn" href="${dirUrl}" target="_blank" rel="noopener">Petunjuk Arah</a>
        </div>
      </div>`;
    })
    .join('');

  section.innerHTML = `<div class="location__grid">${cards}</div>`;
}

/* ---------------- Render: tutorial ---------------- */
function renderTutorial() {
  const section = $('#tutorial');
  const steps = tutorialData
    .map(
      (s, i) => `
    <li class="step">
      <span class="step__num" aria-hidden="true">${i + 1}</span>
      <h3 class="step__title">${s.title}</h3>
      <p class="step__desc">${s.desc}</p>
    </li>`
    )
    .join('');
  section.innerHTML = `
    <div class="tutorial__head">
      <h2 class="tutorial__title">Cara Pesan</h2>
      <p class="tutorial__sub">Lima langkah mudah dari lapar sampai kenyang</p>
    </div>
    <ol class="steps">${steps}</ol>`;
}

/* ---------------- Render: categories ---------------- */
function renderCategories() {
  const track = $('#categoryTrack');
  track.innerHTML = categoriesData
    .map(
      (c) => `
    <button class="chip${c.id === state.activeCategory ? ' chip--active' : ''}"
      type="button" role="tab" aria-selected="${c.id === state.activeCategory}"
      data-category="${c.id}">${c.label}</button>`
    )
    .join('');
}

/* ---------------- Render: catalog ---------------- */
function cardHTML(p) {
  const soldOut = isSoldOut(p.id);
  return `
  <article class="card${soldOut ? ' card--soldout' : ''}" tabindex="0" role="button" aria-label="Lihat ${p.name}${soldOut ? ' (habis hari ini)' : ''}" data-product="${p.id}" aria-disabled="${soldOut}">
    <div class="card__media is-loading">
      <img class="card__img" src="${p.image}" alt="${p.name}, ikan bakar segar di Ciomas, Bogor" width="420" height="560" loading="lazy" decoding="async" onload="this.parentElement.classList.remove('is-loading')" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'" />
      ${soldOut ? `<span class="card__fav card__fav--soldout">Habis</span>` : ''}
    </div>
    <div class="card__body">
      <h3 class="card__name">${p.name}</h3>
      <div class="card__foot">
        <button class="card__add" type="button" data-add="${p.id}"${soldOut ? ' disabled' : ''}>${soldOut ? 'Habis' : '+ Tambah'}</button>
      </div>
    </div>
  </article>`;
}

function renderCatalog() {
  const catalog = $('#catalog');
  const empty = $('#emptyState');
  const items = filteredMenu();

  if (items.length === 0) {
    catalog.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  const isSearching = state.searchQuery.trim() !== '';
  let sections;

  if (isSearching) {
    sections = [
      {
        id: 'hasil',
        title: 'Hasil pencarian',
        sub: `${items.length} menu ditemukan untuk “${state.searchQuery.trim()}”`,
        list: items,
      },
    ];
  } else if (state.activeCategory === 'semua') {
    sections = categoriesData
      .filter((c) => c.id !== 'semua')
      .map((c) => ({
        id: c.id,
        title: c.label,
        sub: `${menuIkanBakarData.filter((p) => p.category === c.id).length} menu pilihan`,
        list: menuIkanBakarData.filter((p) => p.category === c.id),
      }))
      .filter((s) => s.list.length > 0);
  } else {
    sections = [
      {
        id: state.activeCategory,
        title: categoryLabel(state.activeCategory),
        sub: `${items.length} menu pilihan`,
        list: items,
      },
    ];
  }

  catalog.innerHTML = sections
    .map(
      (s) => `
    <section class="section" id="section-${s.id}" aria-label="${s.title}">
      <div class="section__head">
        <div>
          <h2 class="section__title">${s.title}</h2>
          <p class="section__sub">${s.sub}</p>
        </div>
        <div class="section__nav">
          <button class="scroll-btn" type="button" data-scroll="left" data-target="track-${s.id}" aria-label="Geser kiri">‹</button>
          <button class="scroll-btn" type="button" data-scroll="right" data-target="track-${s.id}" aria-label="Geser kanan">›</button>
        </div>
      </div>
      <div class="section__track" id="track-${s.id}">
        ${s.list.map((p) => cardHTML(p)).join('')}
      </div>
    </section>`
    )
    .join('');
}

/* ---------------- Modal ---------------- */
function updateModalFooter() {
  const m = state.modal;
  if (!m) return;
  const p = getProduct(m.productId);
  const soldOut = isSoldOut(p.id);
  $('#qtyVal').textContent = String(m.qty);
  $('#qtyMinus').disabled = m.qty <= 1;
  const cta = $('#modalCta');
  cta.textContent = soldOut ? 'Habis Hari Ini' : 'Tambah ke Keranjang';
  cta.disabled = soldOut;
}

function openModal(productId) {
  const p = getProduct(productId);
  if (!p) return;
  state.modal = {
    productId,
    qty: 1,
  };

  const img = $('#modalImg');
  img.hidden = false;
  img.src = p.image;
  img.alt = p.name;
  img.onerror = function () {
    this.onerror = null;
    this.src = FALLBACK_IMG;
  };

  $('#modalCat').textContent = `${categoryLabel(p.category)} · ${p.spiceTag}`;
  $('#modalName').textContent = p.name;
  $('#modalPortion').textContent = '1 ekor utuh';
  $('#modalDesc').textContent = p.description;

  updateModalFooter();

  const overlay = $('#modalOverlay');
  overlay.classList.add('modal-overlay--open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#modalClose').focus({ preventScroll: true });
}

function closeModal() {
  $('#modalOverlay').classList.remove('modal-overlay--open');
  $('#modalOverlay').setAttribute('aria-hidden', 'true');
  if (!$('#cartOverlay').classList.contains('cart-overlay--open')) {
    document.body.style.overflow = '';
  }
  state.modal = null;
}

/* ---------------- Cart ---------------- */
function cartCount() {
  let n = 0;
  state.cart.forEach((item) => { n += item.qty; });
  return n;
}

function updateCartBadge() {
  const badge = $('#cartBadge');
  const n = cartCount();
  badge.hidden = n === 0;
  badge.textContent = n > 99 ? '99+' : String(n);
  $('#cartSub').textContent = `${n} item`;
}

function renderCart() {
  const box = $('#cartItems');
  updateCartBadge();
  if (state.cart.size === 0) {
    box.innerHTML = `<p class="cart-empty">Keranjang masih kosong.<br />Yuk pilih ikan bakarmu!</p>`;
    return;
  }
  box.innerHTML = [...state.cart.entries()]
    .map(([key, item]) => {
      const p = getProduct(item.productId);
      if (!p) return '';
      return `
      <div class="cart-item">
        <img class="cart-item__img" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'" />
        <div class="cart-item__info">
          <p class="cart-item__name">${p.name}</p>
          <p class="cart-item__qtytext">${item.qty} ekor</p>
        </div>
        <div class="cart-item__qty">
          <button type="button" data-cart-minus="${key}" aria-label="Kurangi">−</button>
          <span>${item.qty}</span>
          <button type="button" data-cart-plus="${key}" aria-label="Tambah">+</button>
        </div>
      </div>`;
    })
    .join('');
}

function openCart() {
  renderCart();
  $('#cartOverlay').classList.add('cart-overlay--open');
  $('#cartOverlay').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cartOverlay').classList.remove('cart-overlay--open');
  $('#cartOverlay').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ---------------- Events ---------------- */
function bindEvents() {
  const syncSearch = (value, source) => {
    state.searchQuery = value;
    const hasValue = value.trim() !== '';
    $('#searchClear').hidden = !hasValue;
    $('#searchClearMobile').hidden = !hasValue;
    const other = source === 'desktop' ? $('#searchInputMobile') : $('#searchInput');
    if (other && other.value !== value) other.value = value;
    renderCatalog();
  };

  $('#searchInput').addEventListener('input', (e) => syncSearch(e.target.value, 'desktop'));
  $('#searchInputMobile').addEventListener('input', (e) => syncSearch(e.target.value, 'mobile'));
  $('#searchClear').addEventListener('click', () => {
    $('#searchInput').value = '';
    $('#searchInputMobile').value = '';
    syncSearch('', 'desktop');
    $('#searchInput').focus();
  });
  $('#searchClearMobile').addEventListener('click', () => {
    $('#searchInput').value = '';
    $('#searchInputMobile').value = '';
    syncSearch('', 'mobile');
    $('#searchInputMobile').focus();
  });

  $('#emptyReset').addEventListener('click', () => {
    state.searchQuery = '';
    state.activeCategory = 'semua';
    $('#searchInput').value = '';
    $('#searchInputMobile').value = '';
    $('#searchClear').hidden = true;
    $('#searchClearMobile').hidden = true;
    renderCategories();
    renderCatalog();
  });

  $('#categoryTrack').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    state.activeCategory = btn.dataset.category;
    renderCategories();
    renderCatalog();
  });

  $('#catalog').addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      e.stopPropagation();
      openModal(addBtn.dataset.add);
      return;
    }
    const scrollBtn = e.target.closest('[data-scroll]');
    if (scrollBtn) {
      const track = document.getElementById(scrollBtn.dataset.target);
      if (track) {
        const dir = scrollBtn.dataset.scroll === 'left' ? -1 : 1;
        track.scrollBy({ left: dir * 440, behavior: 'smooth' });
      }
      return;
    }
    const card = e.target.closest('[data-product]');
    if (card) openModal(card.dataset.product);
  });

  $('#catalog').addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-product]')) {
      e.preventDefault();
      openModal(e.target.dataset.product);
    }
  });

  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', (e) => {
    if (e.target === $('#modalOverlay')) closeModal();
  });

  $('#qtyMinus').addEventListener('click', () => {
    if (state.modal && state.modal.qty > 1) {
      state.modal.qty -= 1;
      updateModalFooter();
    }
  });
  $('#qtyPlus').addEventListener('click', () => {
    if (state.modal && state.modal.qty < 20) {
      state.modal.qty += 1;
      updateModalFooter();
    }
  });

  $('#modalCta').addEventListener('click', () => {
    if (!state.modal) return;
    const m = state.modal;
    const p = getProduct(m.productId);
    const existing = state.cart.get(p.id);
    if (existing) {
      existing.qty += m.qty;
    } else {
      state.cart.set(p.id, { productId: p.id, qty: m.qty });
    }
    renderCart();
    closeModal();
    showToast(`${m.qty}× ${p.name} masuk keranjang`);
  });

  $('#cartBtn').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#cartTutorialBtn').addEventListener('click', () => {
    closeCart();
    setTimeout(() => $('#tutorial').scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
  });
  $('#cartOverlay').addEventListener('click', (e) => {
    if (e.target === $('#cartOverlay')) closeCart();
  });

  $('#cartItems').addEventListener('click', (e) => {
    const minus = e.target.closest('[data-cart-minus]');
    const plus = e.target.closest('[data-cart-plus]');
    if (!minus && !plus) return;
    const key = (minus || plus).dataset.cartMinus || (minus || plus).dataset.cartPlus;
    const item = state.cart.get(key);
    if (!item) return;
    if (minus) {
      item.qty -= 1;
      if (item.qty <= 0) state.cart.delete(key);
    } else {
      item.qty += 1;
    }
    renderCart();
  });

  $('#checkoutBtn').addEventListener('click', () => {
    if (state.cart.size === 0) {
      showToast('Keranjang masih kosong');
      return;
    }
    const rule = '-'.repeat(38);
    const lines = [
      `Halo ${locationData.name}! Saya mau pesan:`,
      '```', rule];
    let num = 0;
    state.cart.forEach((item) => {
      const p = getProduct(item.productId);
      if (!p) return;
      num += 1;
      lines.push(`${num}.  ${p.name}`, `    ${item.qty} ekor`, rule);
    });
    lines.push(`TOTAL ITEM: ${cartCount()}`, '```');
    if (!isOpenNow()) {
      lines.push(`Catatan: pesanan dibuat di luar jam buka (${locationData.hours.label}). Mohon konfirmasi ketersediaan saat warung buka.`);
    }
    lines.push('Terima kasih!');
    const waUrl = waLink(lines.join('\n'));
    const count = cartCount();
    window.open(waUrl, '_blank', 'noopener');
    state.cart.clear();
    renderCart();
    closeCart();
    showToast(`Pesanan ${count} item diteruskan ke WhatsApp. Pesan GoSend untuk pengambilan!`);
  });

  /* Nav sticky dapat bayangan saat halaman di-scroll (kelas .header--scrolled).
     Tinggi header juga dipublikasikan ke CSS (--header-h) supaya filter
     kategori sticky selalu menempel tepat di bawah header, termasuk di HP
     saat baris search ikut tampil. */
  const stickyHeader = $('#topHeader');
  if (stickyHeader) {
    const syncHeaderShadow = () => stickyHeader.classList.toggle('header--scrolled', window.scrollY > 8);
    window.addEventListener('scroll', syncHeaderShadow, { passive: true });
    syncHeaderShadow();

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-h', `${stickyHeader.offsetHeight}px`);
    };
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight);
    window.addEventListener('load', syncHeaderHeight);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncHeaderHeight).catch(() => {});
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if ($('#modalOverlay').classList.contains('modal-overlay--open')) closeModal();
      if ($('#cartOverlay').classList.contains('cart-overlay--open')) closeCart();
    }
  });
}

/* ---------------- Init ---------------- */
function init() {
  const loading = $('#loadingState');
  const errorBox = $('#errorState');
  const show = (el, visible) => { if (el) el.hidden = !visible; };
  show(loading, true);
  try {
    bindEvents();
    syncStaticWaLinks();
    renderHero();
    renderCategories();
    renderCatalog();
    renderLocation();
    renderTutorial();
    renderCart();
    show(errorBox, false);
  } catch (err) {
    const catalog = $('#catalog');
    if (catalog) catalog.innerHTML = '';
    const empty = $('#emptyState');
    if (empty) empty.hidden = true;
    show(errorBox, true);
  } finally {
    show(loading, false);
  }
  const retry = $('#errorRetry');
  if (retry) retry.addEventListener('click', () => {
    show(errorBox, false);
    show(loading, true);
    try {
      renderCatalog();
    } catch (err) {
      show(errorBox, true);
    } finally {
      show(loading, false);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
