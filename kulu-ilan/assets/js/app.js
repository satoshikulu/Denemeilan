// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

function setActiveNav() {
  const path = location.pathname;
  // could add active styles later if needed
}

function renderNeighborhoods() {
  const container = document.getElementById('neighborhood-list');
  if (!container) return;
  container.innerHTML = NEIGHBORHOODS.map(n => `
    <a class="neighborhood" href="/listings.html?neighborhood=${encodeURIComponent(n)}">${n}</a>
  `).join('');
}

function userIsApproved() {
  const user = session.getCurrentUser();
  if (!user) return false;
  const users = storage.get('ki_users', []);
  const found = users.find(u => u.phone === user.phone);
  return !!(found && found.approved);
}

function requireApprovedUser(redirect = '/login.html') {
  if (!userIsApproved()) {
    alert('Devam etmek için onaylı kullanıcı girişi gereklidir.');
    location.href = redirect;
    return false;
  }
  return true;
}