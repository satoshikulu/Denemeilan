const ADMIN_PASS = '1234';

function initAdminPage() {
  const authBox = document.getElementById('admin-auth');
  const panel = document.getElementById('admin-panel');
  const loginForm = document.getElementById('admin-login-form');
  const msg = document.getElementById('admin-login-msg');

  const authed = storage.get('ki_admin_authed', false);
  if (authed) {
    authBox.hidden = true;
    panel.hidden = false;
    renderAdminTabs();
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('admin-pass').value;
    if (pass === ADMIN_PASS) {
      storage.set('ki_admin_authed', true);
      authBox.hidden = true;
      panel.hidden = false;
      renderAdminTabs();
    } else {
      msg.textContent = 'Hatalı şifre';
    }
  });
}

function renderAdminTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(btn => btn.addEventListener('click', () => switchTab(btn)));
  switchTab(document.querySelector('.tab.active'));
}

function switchTab(btn) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const tab = btn.dataset.tab;
  document.getElementById('tab-users').hidden = tab !== 'users';
  document.getElementById('tab-listings').hidden = tab !== 'listings';
  document.getElementById('tab-approved').hidden = tab !== 'approved';
  if (tab === 'users') renderPendingUsers();
  if (tab === 'listings') renderPendingListings();
  if (tab === 'approved') renderApprovedListings();
}

function renderPendingUsers() {
  const box = document.getElementById('tab-users');
  const users = storage.get('ki_users', []);
  const pending = users.filter(u => !u.approved);
  if (!pending.length) { box.innerHTML = '<div class="muted">Bekleyen üye yok.</div>'; return; }
  box.innerHTML = pending.map(u => `
    <div class="card" style="display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:8px">
      <div>
        <div><strong>${u.name}</strong></div>
        <div class="muted">${u.phone}</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-good" onclick="approveUser('${u.phone}')">Onayla</button>
        <button class="btn btn-bad" onclick="rejectUser('${u.phone}')">Sil</button>
      </div>
    </div>
  `).join('');
}

function approveUser(phone) {
  const users = storage.get('ki_users', []);
  const u = users.find(x => x.phone === phone);
  if (u) { u.approved = true; storage.set('ki_users', users); }
  renderPendingUsers();
}

function rejectUser(phone) {
  let users = storage.get('ki_users', []);
  users = users.filter(x => x.phone !== phone);
  storage.set('ki_users', users);
  renderPendingUsers();
}

function renderPendingListings() {
  const box = document.getElementById('tab-listings');
  const list = storage.get('ki_listings', []);
  const pending = list.filter(l => !l.approved);
  if (!pending.length) { box.innerHTML = '<div class="muted">Bekleyen ilan yok.</div>'; return; }
  box.innerHTML = pending.map(l => `
    <div class="card" style="display:grid;gap:8px;margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <strong>${l.title}</strong>
        <span class="badge">${l.neighborhood}</span>
      </div>
      <div class="muted">${l.type.toUpperCase()} • ${formatPriceTRY(l.price)}</div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-good" onclick="approveListing('${l.id}')">Yayına Al</button>
        <button class="btn btn-bad" onclick="rejectListing('${l.id}')">Reddet</button>
      </div>
    </div>
  `).join('');
}

function approveListing(id) {
  const list = storage.get('ki_listings', []);
  const l = list.find(x => x.id === id);
  if (l) { l.approved = true; storage.set('ki_listings', list); }
  renderPendingListings();
}

function rejectListing(id) {
  let list = storage.get('ki_listings', []);
  list = list.filter(x => x.id !== id);
  storage.set('ki_listings', list);
  renderPendingListings();
}

function renderApprovedListings() {
  const box = document.getElementById('tab-approved');
  const list = storage.get('ki_listings', []);
  const approved = list.filter(l => l.approved);
  if (!approved.length) { box.innerHTML = '<div class="muted">Yayında ilan yok.</div>'; return; }
  box.innerHTML = approved.map(l => `
    <a class="card" href="/listing-detail.html?id=${encodeURIComponent(l.id)}" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <span>${l.title}</span>
      <span class="muted">${formatPriceTRY(l.price)}</span>
    </a>
  `).join('');
}