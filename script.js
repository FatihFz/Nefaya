const menuItems = [
  { id: 1, name: "Nasi Ayam Kecap", price: 25000, rating: 4.7, description: "Ayam kecap lembut dengan nasi hangat dan sayur segar." },
  { id: 2, name: "Soto Ayam Khas Jawa", price: 22000, rating: 4.8, description: "Kuah gurih dengan irisan ayam, tauge, dan telur rebus." },
  { id: 3, name: "Bakmi Goreng Spesial", price: 27000, rating: 4.5, description: "Mie goreng dengan ayam, sawi, dan telur mata sapi." },
  { id: 4, name: "Gado-Gado Komplit", price: 20000, rating: 4.6, description: "Sayuran segar dengan bumbu kacang spesial." },
  { id: 5, name: "Nasi Goreng Kampung", price: 23000, rating: 4.9, description: "Nasi goreng dengan telur, ayam suwir, dan kerupuk udang." },
  { id: 6, name: "Sup Buntut Hangat", price: 35000, rating: 4.8, description: "Sup buntut empuk dengan kuah bening dan rempah alami." }
];

function renderStars(rating) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  let stars = '★'.repeat(full);
  if (hasHalf) stars += '½';
  return `<div class="rating">${stars}</div>`;
}

function renderMenu() {
  const container = document.getElementById('menu-list');
  if (!container) return;

  container.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <div class="menu-img">🍲</div>
      <div class="menu-info">
        <h3>${item.name}</h3>
        <div class="price">Rp${item.price.toLocaleString()}</div>
        ${renderStars(item.rating)}
        <a href="https://wa.me/6281318515574?text=Halo%20NEFAYA%20Kitchen%2C%20saya%20ingin%20pesan%20${encodeURIComponent(item.name)}." 
           class="btn-order" target="_blank">
          Pesan Sekarang
        </a>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
});