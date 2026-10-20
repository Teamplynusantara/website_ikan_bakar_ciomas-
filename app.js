/* ============================================================
   Ikan Bakar Segar Ciomas, katalog ikan bakar.
   Seluruh data terpusat di bawah. Tambah/edit menu cukup
   dengan mengubah array `menuIkanBakarData`. Foto produk
   tersimpan lokal di folder `asset/`. HTML hanya berisi
   kontainer kosong, semua DOM di-render dari sini.
   ============================================================ */

const FALLBACK_IMG = 'asset/gurame-bakar.jpg';

const categoriesData = [
  { id: 'semua', label: 'Semua' },
  { id: 'air-tawar', label: 'Ikan Air Tawar' },
  { id: 'laut', label: 'Ikan Laut' },
];

const heroData = {
  titleA: 'Ikan Bakar Segar',
  titleB: 'Setiap Hari.',
  description:
    'Dibakar di atas arang batok dengan bumbu rempah khas Nusantara. Pilih gurame, mujaer, kakap, atau kerapu favoritmu. Level pedas bebas request.',
  image: 'asset/gurame-bakar.jpg',
};

const bannersData = [
  {
    id: 'b1',
    tag: 'Ikan Utuh',
    title: 'Gurame Bakar Spesial',
    desc: 'Ikan utuh di atas daun pisang, sambal bebas pilih.',
    image: 'asset/gurame-bakar.jpg',
  },
  {
    id: 'b2',
    tag: 'Manis Gurih',
    title: 'Kerapu Bakar Manis Pedas',
    desc: 'Daging kenyal juicy, bumbu meresap pekat.',
    image: 'asset/kerapu-bakar-manis-pedas.jpg',
  },
  {
    id: 'b3',
    tag: 'Bebas Request',
    title: 'Mujaer Manis Pedas',
    desc: 'Tiga sambal dalam satu mangkok.',
    image: 'asset/mujaer-bakar-manis-pedas-2.jpg',
  },
];

const tutorialData = [
  {
    title: 'Pilih Menu',
    desc: 'Telusuri katalog, klik card ikan untuk atur bumbu bakar, sambal cocolan, add-on, dan jumlah porsi.',
  },
  {
    title: 'Checkout via WhatsApp',
    desc: 'Tekan "Checkout via WhatsApp" di keranjang. Rincian pesanan terkirim otomatis ke nomor warung.',
  },
  {
    title: 'Konfirmasi Warung',
    desc: 'Tunggu balasan WhatsApp dari warung untuk konfirmasi ketersediaan ikan dan total pembayaran.',
  },
  {
    title: 'Pesan GoSend / Kurir',
    desc: 'Kami melayani ambil di tempat. Pesan GoSend Instant, GrabExpress, atau kurir lain dengan titik jemput alamat warung di atas.',
  },
  {
    title: 'Terima & Nikmati',
    desc: 'Sebutkan nama pemesan ke kurir saat pengambilan. Sajikan selagi hangat!',
  },
];

/* Stok harian: isi ID menu yang habis hari ini, mis. ['l-kakap', 'g-mujaer'].
   Kosongkan ([]) kalau semua tersedia. Card tetap tampil dengan label Habis. */
const soldOutIds = [];

/* Jam buka: 08.00-18.00 WIB setiap hari (buka jam 8, tutup jam 6).
   Satu config ini dipakai status hero, kartu lokasi, dan
   catatan checkout. Kalau jam berubah, ubah di sini saja. */
const locationData = {  name: 'Ikan Bakar Segar Ciomas',
  address: 'Jl. Cemara VIII No.14 Blok A, Pagelaran, Kec. Ciomas, Kota Bogor 16610',
  hours: { open: '08:00', close: '18:00', label: 'Buka setiap hari · 08.00-18.00 WIB' },
  phone: '0877-7437-5755',
  whatsapp: '6287774375755',
  note: 'Klik "Petunjuk Arah" untuk rute tercepat dari lokasimu.',
  query: 'Ikan Bakar Segar Ciomas, Jl. Cemara VIII, Ciomas, Bogor',
};

const bumbuVariants = [  { id: 'kecap', label: 'Kecap Manis Gurih', desc: 'Olesan kecap manis + bawang, gurih klasik.', extra: 0 },
  { id: 'rica', label: 'Rica-Rica Pedas', desc: 'Cabai merah, jahe & kemangi. Nampol.', extra: 2000 },
  { id: 'madu', label: 'Madu Bakar', desc: 'Olesan madu murni, manis karamel.', extra: 5000 },
  { id: 'padang', label: 'Bumbu Padang', desc: 'Santan kental + cabai giling khas Minang.', extra: 4000 },
];

const sambalOptions = [
  { id: 'terasi', label: 'Sambal Terasi', desc: 'Pedas gurih klasik' },
  { id: 'dabu', label: 'Sambal Dabu-Dabu', desc: 'Segar tomat & jeruk nipis' },
  { id: 'matah', label: 'Sambal Matah', desc: 'Bawang + serai + minyak kelapa' },
  { id: 'kecap-pedas', label: 'Sambal Kecap Pedas', desc: 'Kecap manis + rawit iris' },
];

const addonOptions = [
  { id: 'nasi', label: 'Extra Nasi Putih', desc: 'Nasi pulen 1 porsi', price: 5000 },
  { id: 'tahu-tempe', label: 'Tahu & Tempe Goreng', desc: '5 potong, gurih renyah', price: 6000 },
  { id: 'es-teh', label: 'Es Teh Manis', desc: 'Teh melati jumbo', price: 5000 },
];

/* Metode pembayaran di keranjang: 3 tema utama.
   Tambah tema cukup tambahkan objek baru di array ini. */
const paymentThemesData = [
  {
    id: 'bank',
    label: 'Bank',
    hint: 'Transfer ke rekening warung (BCA / BRI / Mandiri), kirim bukti setelah transfer.',
  },
  {
    id: 'qris',
    label: 'QRIS',
    hint: 'Scan kode QRIS warung pakai aplikasi bank atau e-wallet apa pun.',
  },
  {
    id: 'tunai',
    label: 'Tunai',
    hint: 'Bayar tunai di kasir saat ambil pesanan.',
  },
];

const menuIkanBakarData = [
  {
    id: 'g-gurame', name: 'Gurame Bakar', category: 'air-tawar',
    price: 45000, time: '25-30 mnt', weight: '±600 gr / ekor',
    spiceTag: 'Bumbu Kecap', badge: null, customizable: true,
    image: 'asset/gurame-bakar.jpg',
    description: 'Gurame utuh disajikan di atas daun pisang dengan olesan bumbu kecap gurih yang dikaramelisasi di atas bara. Dilengkapi dua sambal: terasi pedas dan dabu-dabu segar, plus lalapan.',
  },
  {
    id: 'g-mujaer', name: 'Mujaer Bakar Manis Pedas', category: 'air-tawar',
    price: 25000, time: '20-25 mnt', weight: '±400 gr / ekor',
    spiceTag: 'Bumbu Manis Pedas', badge: 'Pedas', customizable: true,
    image: 'asset/mujaer-bakar-manis-pedas-1.jpg',
    description: 'Mujaer segar berbalut bumbu manis pedas yang meresap hingga ke daging. Disajikan dengan mangkok tiga sekat berisi sambal dabu-dabu, sambal kecap, dan sambal terasi.',
  },
  {
    id: 'l-bawal', name: 'Bawal Bakar Manis Pedas', category: 'laut',
    price: 32000, time: '20-25 mnt', weight: '±350 gr / ekor',
    spiceTag: 'Bumbu Manis Pedas', badge: null, customizable: true,
    image: 'asset/bawal-bakar-manis-pedas.jpg',
    description: 'Bawal pipih berdaging tebal dengan olesan bumbu manis pedas yang garing karamel. Disertai lalapan segar, sambal dabu-dabu, sambal terasi, dan jeruk nipis.',
  },
  {
    id: 'l-ikuwe', name: 'Ikan Kuwe Bakar', category: 'laut',
    price: 35000, time: '20 mnt', weight: '±400 gr / ekor',
    spiceTag: 'Bumbu Kecap', badge: null, customizable: true,
    image: 'asset/ikan-kuwe-bakar.jpg',
    description: 'Kuwe hasil tangkapan nelayan dibakar dengan olesan kecap gurih. Dagingnya padat dan manis, disajikan dengan sambal dabu-dabu, kemangi, dan timun segar.',
  },
  {
    id: 'l-kuwe', name: 'Kuwe Bakar', category: 'laut',
    price: 33000, time: '20 mnt', weight: '±350 gr / ekor',
    spiceTag: 'Bumbu Kecap', badge: null, customizable: true,
    image: 'asset/kuwe-bakar.jpg',
    description: 'Kuwe bakar bumbu kecap keemasan dengan aroma bakaran yang wangi. Sambal dabu-dabu dan sambal terasi disajikan terpisah dengan irisan lemon segar.',
  },
  {
    id: 'l-kakap', name: 'Kakap Bakar', category: 'laut',
    price: 55000, time: '25-30 mnt', weight: '±500 gr / ekor',
    spiceTag: 'Bumbu Rica-Rica', badge: null, customizable: true,
    image: 'asset/kakap-bakar.jpg',
    description: 'Kakap merah berdaging putih tebal dibalur bumbu merah pedas hingga meresap. Disajikan dengan sambal terasi, lalapan segar, jeruk nipis, dan bawang merah.',
  },
  {
    id: 'l-kuwemp', name: 'Kuwe Bakar Manis Pedas', category: 'laut',
    price: 35000, time: '20-25 mnt', weight: '±350 gr / ekor',
    spiceTag: 'Bumbu Manis Pedas', badge: null, customizable: true,
    image: 'asset/kuwe-bakar-manis-pedas.jpg',
    description: 'Kuwe pipih berbumbu manis pedas dengan lapisan karamel yang gurih. Dilengkapi sambal merah, sambal dabu-dabu, lalapan, dan jeruk nipis.',
  },
  {
    id: 'l-kerapu', name: 'Kerapu Bakar Manis Pedas', category: 'laut',
    price: 68000, time: '30 mnt', weight: '±600 gr / ekor',
    spiceTag: 'Bumbu Manis Pedas', badge: null, customizable: true,
    image: 'asset/kerapu-bakar-manis-pedas.jpg',
    description: 'Kerapu berdaging kenyal juicy dengan baluran bumbu pekat manis pedas. Disajikan mewah dengan dua mangkok sambal: terasi dan dabu-dabu segar.',
  },
];

/* ---------------- State ---------------- */
const state = {
  activeCategory: 'semua',
  searchQuery: '',
  cart: new Map(),
  modal: null,
  payTheme: 'bank',
};

/* ---------------- Helpers ---------------- */
const $ = (selector) => document.querySelector(selector);

const rupiah = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const categoryLabel = (id) => {
  const found = categoriesData.find((c) => c.id === id);
  return found ? found.label : id;
};

const getProduct = (id) => menuIkanBakarData.find((p) => p.id === id);
const isSoldOut = (id) => soldOutIds.includes(id);

const getPaymentTheme = (id) => paymentThemesData.find((t) => t.id === id) || paymentThemesData[0];

/* Ganti teks petunjuk pembayaran sesuai tema yang dipilih. */
function renderPayHint() {
  const theme = getPaymentTheme(state.payTheme);
  const hint = $('#payHint');
  if (hint) hint.textContent = theme.hint;
}

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
const getBumbu = (id) => bumbuVariants.find((b) => b.id === id);
const getSambal = (id) => sambalOptions.find((s) => s.id === id);
const getAddon = (id) => addonOptions.find((a) => a.id === id);

const extraLabel = (extra) => (extra > 0 ? ` <small>+${rupiah(extra)}</small>` : '');


/* Klik-ke-chat WhatsApp. Default-nya ke APLIKASI, bukan WhatsApp Web:
   HP     -> `wa.me` adalah app-link, browser langsung memanggil aplikasi
             tanpa lewat halaman perantara.
   Desktop -> `wa.me` selalu singgah dulu di api.whatsapp.com (tombol
             "Buka aplikasi" / "Lanjutkan ke WhatsApp Web"), jadi dipakai
             protokol `whatsapp://send` yang langsung membuka aplikasi. */
const waLink = (text) => {
  const phone = locationData.whatsapp;
  const body = encodeURIComponent(text);
  const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return isMobile
    ? `https://wa.me/${phone}?text=${body}`
    : `whatsapp://send?phone=${phone}&text=${body}`;
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
      <p class="hero__eyebrow">Ikan Bakar Arang &middot; Ciomas, Bogor</p>
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

/* ---------------- Render: banners ---------------- */
function renderBanners() {
  const track = $('#bannerTrack');
  track.innerHTML = bannersData
    .map(
      (b) => `
    <button class="promo-card is-loading" type="button" role="listitem" data-banner="${b.id}">
      <img class="promo-card__img" src="${b.image}" alt="${b.title}" loading="lazy" onload="this.parentElement.classList.remove('is-loading')" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'" />
      <span class="promo-card__shade" aria-hidden="true"></span>
      <span class="promo-card__body">
        <span class="promo-card__tag">${b.tag}</span>
        <span class="promo-card__name">${b.title}</span>
        <span class="promo-card__desc">${b.desc}</span>
      </span>
    </button>`
    )
    .join('');
}

/* ---------------- Render: location ---------------- */
function renderLocation() {
  const section = $('#lokasi');
  const q = encodeURIComponent(locationData.query);
  const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;
  const dirUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  section.innerHTML = `
    <div class="location__head">
      <h2 class="location__title">Kunjungi Warung Kami</h2>
      <p class="location__sub">Makan di tempat lebih nikmat, ikan dibakar dadakan di atas bara</p>
    </div>
    <div class="location__grid">
      <div class="location__map">
        <iframe class="location__frame" src="${embedSrc}" title="Peta lokasi ${locationData.name}"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      <div class="location__card">
        <h3 class="location__name">${locationData.name}</h3>
        <p class="location__row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${locationData.address}</span>
        </p>
        <p class="location__row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
          <span>${locationData.hours.label} · <strong id="openStatusInline">${openStatusText()}</strong></span>
        </p>
        <p class="location__row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <a class="location__link" href="tel:+${locationData.whatsapp}">${locationData.phone}</a>
        </p>
        <p class="location__note">${locationData.note}</p>
        <div class="location__actions">
          <a class="location__btn location__btn--primary" href="${mapsUrl}" target="_blank" rel="noopener">Buka di Google Maps</a>
          <a class="location__btn" href="${dirUrl}" target="_blank" rel="noopener">Petunjuk Arah</a>
        </div>
      </div>
    </div>`;
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
      ${soldOut ? `<span class="card__fav card__fav--soldout">Habis</span>` : (p.badge ? `<span class="card__fav">${p.badge}</span>` : '')}
      <span class="card__spice">${p.spiceTag}</span>
    </div>
    <div class="card__body">
      <h3 class="card__name">${p.name}</h3>
      <div class="card__meta">
        <span>${p.time}</span>
        <span aria-hidden="true">·</span>
        <span>${p.weight}</span>
      </div>
      <div class="card__foot">
        <span class="card__price">${rupiah(p.price)}</span>
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

/* ---------------- Modal option groups ---------------- */
function renderModalOptions() {
  const box = $('#modalOptions');
  const m = state.modal;
  const p = getProduct(m.productId);
  if (!p || !p.customizable) {
    box.innerHTML = '';
    return;
  }

  const bumbuBtns = bumbuVariants
    .map(
      (b) => `
    <button class="opt-chip${b.id === m.bumbuId ? ' opt-chip--active' : ''}"
      type="button" data-bumbu="${b.id}" aria-pressed="${b.id === m.bumbuId}">${b.label}${extraLabel(b.extra)}</button>`
    )
    .join('');

  const sambalBtns = sambalOptions
    .map(
      (s) => `
    <button class="opt-chip${s.id === m.sambalId ? ' opt-chip--active' : ''}"
      type="button" data-sambal="${s.id}" aria-pressed="${s.id === m.sambalId}">${s.label}</button>`
    )
    .join('');

  const addonRows = addonOptions
    .map((a) => {
      const active = m.addonIds.includes(a.id);
      return `
    <div class="opt-check${active ? ' opt-check--active' : ''}" role="checkbox"
      aria-checked="${active}" tabindex="0" data-addon="${a.id}">
      <span class="opt-check__box" aria-hidden="true">${active ? '✓' : ''}</span>
      <span class="opt-check__text">
        <span class="opt-check__name">${a.label}</span>
        <span class="opt-check__desc">${a.desc}</span>
      </span>
      <span class="opt-check__price">+${rupiah(a.price)}</span>
    </div>`;
    })
    .join('');

  const bumbuDesc = getBumbu(m.bumbuId).desc;
  const sambalDesc = getSambal(m.sambalId).desc;

  box.innerHTML = `
    <div class="opt">
      <h4 class="opt__title">Varian Bumbu Bakar</h4>
      <p class="opt__hint">${bumbuDesc}</p>
      <div class="opt__chips">${bumbuBtns}</div>
    </div>
    <div class="opt">
      <h4 class="opt__title">Sambal Cocolan</h4>
      <p class="opt__hint">${sambalDesc}</p>
      <div class="opt__chips">${sambalBtns}</div>
    </div>
    <div class="opt">
      <h4 class="opt__title">Add-on / Pelengkap <small>· boleh pilih lebih dari satu</small></h4>
      <div class="opt__list">${addonRows}</div>
    </div>`;
}

function modalUnitPrice() {
  const m = state.modal;
  const p = getProduct(m.productId);
  let unit = p.price;
  if (p.customizable) {
    unit += getBumbu(m.bumbuId).extra;
    m.addonIds.forEach((id) => { unit += getAddon(id).price; });
  }
  return unit;
}

function updateModalFooter() {
  const m = state.modal;
  if (!m) return;
  const p = getProduct(m.productId);
  const unit = modalUnitPrice();
  const soldOut = isSoldOut(p.id);
  $('#qtyVal').textContent = String(m.qty);
  $('#qtyMinus').disabled = m.qty <= 1;
  $('#modalBasePrice').textContent = `Harga dasar: ${rupiah(p.price)}`;
  $('#modalUnit').innerHTML = `${rupiah(unit)} / porsi${m.qty > 1 ? `<br />${m.qty} porsi` : ''}`;
  const cta = $('#modalCta');
  cta.textContent = soldOut ? 'Habis Hari Ini' : `Tambah ke Keranjang - ${rupiah(unit * m.qty)}`;
  cta.disabled = soldOut;
}

function openModal(productId) {
  const p = getProduct(productId);
  if (!p) return;
  state.modal = {
    productId,
    bumbuId: 'kecap',
    sambalId: 'terasi',
    addonIds: [],
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
  $('#modalTime').textContent = `Bakar ${p.time}`;
  $('#modalWeight').textContent = p.weight;
  $('#modalDesc').textContent = p.description;
  $('#modalNote').value = '';

  renderModalOptions();
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

function cartTotal() {
  let total = 0;
  state.cart.forEach((item) => { total += item.unitPrice * item.qty; });
  return total;
}

function updateCartBadge() {
  const badge = $('#cartBadge');
  const n = cartCount();
  badge.hidden = n === 0;
  badge.textContent = n > 99 ? '99+' : String(n);
  $('#cartSub').textContent = `${n} item`;
}

function variantSummary(item) {
  const parts = [];
  if (item.bumbuId) parts.push(getBumbu(item.bumbuId).label);
  if (item.sambalId) parts.push(getSambal(item.sambalId).label);
  item.addonIds.forEach((id) => parts.push(`+${getAddon(id).label}`));
  return parts.join(' · ');
}

function renderCart() {
  const box = $('#cartItems');
  updateCartBadge();
  if (state.cart.size === 0) {
    box.innerHTML = `<p class="cart-empty">Keranjang masih kosong.<br />Yuk pilih ikan bakarmu!</p>`;
    $('#cartTotal').textContent = rupiah(0);
    return;
  }
  box.innerHTML = [...state.cart.entries()]
    .map(([key, item]) => {
      const p = getProduct(item.productId);
      if (!p) return '';
      const variant = variantSummary(item);
      return `
      <div class="cart-item">
        <img class="cart-item__img" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'" />
        <div class="cart-item__info">
          <p class="cart-item__name">${p.name}</p>
          ${variant ? `<p class="cart-item__variant">${variant}</p>` : ''}
          ${item.note ? `<p class="cart-item__note">“${item.note}”</p>` : ''}
          <p class="cart-item__price">${rupiah(item.unitPrice * item.qty)}</p>
        </div>
        <div class="cart-item__qty">
          <button type="button" data-cart-minus="${key}" aria-label="Kurangi">−</button>
          <span>${item.qty}</span>
          <button type="button" data-cart-plus="${key}" aria-label="Tambah">+</button>
        </div>
      </div>`;
    })
    .join('');
  $('#cartTotal').textContent = rupiah(cartTotal());
}

function makeCartKey(productId, bumbuId, sambalId, addonIds, note) {
  return [productId, bumbuId || '-', sambalId || '-', [...addonIds].sort().join('+'), (note || '').trim().toLowerCase()].join('|');
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

/* ---------------- Buyer form ---------------- */
function readBuyer() {
  const mark = (id, bad) => {
    const input = $(id);
    const field = input ? input.closest('.buyer__field') : null;
    if (field) field.classList.toggle('buyer__field--error', bad);
  };
  const name = $('#buyerName').value.trim();
  const picked = document.querySelector('input[name="buyerMethod"]:checked');
  const method = picked ? picked.value : 'ambil';
  mark('#buyerName', false);
  if (name.length < 2) {
    mark('#buyerName', true);
    return { ok: false, error: 'Isi nama pemesan dulu ya', selector: '#buyerName' };
  }

  /* Tema pembayaran (tanpa sub-tema) */
  const theme = getPaymentTheme(state.payTheme);
  return { ok: true, name, method, payment: theme.label };
}

/* ---------------- Events ---------------- */
function bindEvents() {
  const syncSearch = (value, source) => {
    state.searchQuery = value;
    $('#searchClear').hidden = value.trim() === '';
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

  $('#emptyReset').addEventListener('click', () => {
    state.searchQuery = '';
    state.activeCategory = 'semua';
    $('#searchInput').value = '';
    $('#searchInputMobile').value = '';
    $('#searchClear').hidden = true;
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

  $('#bannerTrack').addEventListener('click', (e) => {
    const card = e.target.closest('[data-banner]');
    if (!card) return;
    state.activeCategory = 'semua';
    state.searchQuery = '';
    $('#searchInput').value = '';
    $('#searchInputMobile').value = '';
    $('#searchClear').hidden = true;
    renderCategories();
    renderCatalog();
    $('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Lihat semua menu ikan bakar di bawah');
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

  $('#modalOptions').addEventListener('click', (e) => {
    if (!state.modal) return;
    const bumbuBtn = e.target.closest('[data-bumbu]');
    if (bumbuBtn) {
      state.modal.bumbuId = bumbuBtn.dataset.bumbu;
      renderModalOptions();
      updateModalFooter();
      return;
    }
    const sambalBtn = e.target.closest('[data-sambal]');
    if (sambalBtn) {
      state.modal.sambalId = sambalBtn.dataset.sambal;
      renderModalOptions();
      updateModalFooter();
      return;
    }
    const addonRow = e.target.closest('[data-addon]');
    if (addonRow) {
      const id = addonRow.dataset.addon;
      const idx = state.modal.addonIds.indexOf(id);
      if (idx >= 0) state.modal.addonIds.splice(idx, 1);
      else state.modal.addonIds.push(id);
      renderModalOptions();
      updateModalFooter();
    }
  });

  $('#modalOptions').addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-addon]')) {
      e.preventDefault();
      e.target.click();
    }
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
    const note = $('#modalNote').value.trim();
    const unit = modalUnitPrice();
    const key = makeCartKey(p.id, p.customizable ? m.bumbuId : null, p.customizable ? m.sambalId : null, p.customizable ? m.addonIds : [], note);
    const existing = state.cart.get(key);
    if (existing) {
      existing.qty += m.qty;
    } else {
      state.cart.set(key, {
        productId: p.id,
        bumbuId: p.customizable ? m.bumbuId : null,
        sambalId: p.customizable ? m.sambalId : null,
        addonIds: p.customizable ? [...m.addonIds] : [],
        note,
        qty: m.qty,
        unitPrice: unit,
      });
    }
    renderCart();
    closeModal();
    showToast(`${m.qty}× ${p.name} masuk keranjang`);
  });

  $('#cartBtn').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  document.querySelectorAll('input[name="buyerMethod"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.buyer__method').forEach((label) => {
        label.classList.toggle('buyer__method--active', !!(label.control && label.control.checked));
      });
    });
  });

  document.querySelectorAll('input[name="payTheme"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      const theme = getPaymentTheme(radio.value);
      state.payTheme = theme.id;
      document.querySelectorAll('input[name="payTheme"]').forEach((input) => {
        const label = input.closest('.buyer__method');
        if (label) label.classList.toggle('buyer__method--active', input.checked);
      });
      renderPayHint();
    });
  });
  $('#cartTutorialBtn').addEventListener('click', () => {
    closeCart();
    setTimeout(() => $('#tutorial').scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
  });  $('#cartOverlay').addEventListener('click', (e) => {
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
    const buyer = readBuyer();
    if (!buyer.ok) {
      showToast(buyer.error);
      const bad = $(buyer.selector);
      if (bad) bad.focus({ preventScroll: false });
      return;
    }
    const rule = '-'.repeat(38);
    const wrapText = (text, indent) => {
      const out = [];
      let cur = '';
      text.split(' ').forEach((word) => {
        if (`${cur} ${word}`.trim().length > 34) {
          out.push(cur.trim());
          cur = word;
        } else {
          cur += ` ${word}`;
        }
      });
      if (cur.trim()) out.push(cur.trim());
      return out.map((line) => indent + line);
    };
    const lines = [
      `Halo ${locationData.name}! Saya mau pesan:`,
      `Nama: ${buyer.name}`,
      `Bayar: ${buyer.payment}`,
      buyer.method === 'antar' ? 'Diambil oleh kurir' : 'Ambil di tempat',
      '```', rule];
    let num = 0;
    state.cart.forEach((item) => {
      const p = getProduct(item.productId);
      if (!p) return;
      num += 1;
      lines.push(`${num}.  ${p.name}`);
      const variant = variantSummary(item).split(' · ').join(', ');
      if (variant) lines.push(...wrapText(variant, '    '));
      lines.push(`    ${item.qty} x ${rupiah(item.unitPrice)} = ${rupiah(item.unitPrice * item.qty)}`);
      if (item.note) lines.push(...wrapText(`Catatan: ${item.note}`, '    '));
      lines.push(rule);
    });
    lines.push(`TOTAL ITEM  : ${cartCount()}`, `TOTAL BAYAR : ${rupiah(cartTotal())}`, rule, '```');
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

  $('#locationBtn').addEventListener('click', () => {
    const q = encodeURIComponent(locationData.query);
    window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank', 'noopener');
  });

  /* Nav sticky dapat bayangan saat halaman di-scroll (kelas .header--scrolled). */
  const stickyHeader = $('#topHeader');
  if (stickyHeader) {
    const syncHeaderShadow = () => stickyHeader.classList.toggle('header--scrolled', window.scrollY > 8);
    window.addEventListener('scroll', syncHeaderShadow, { passive: true });
    syncHeaderShadow();
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
    renderBanners();
    renderCategories();
    renderCatalog();
    renderLocation();
    renderTutorial();
    renderCart();
    renderPayHint();
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
