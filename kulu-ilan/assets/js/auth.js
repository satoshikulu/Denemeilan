function initAuthPage() {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const signupMsg = document.getElementById('signup-msg');
  const loginMsg = document.getElementById('login-msg');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();
    if (!name || !phone) return;

    const users = storage.get('ki_users', []);
    const exists = users.find(u => u.phone === phone);
    if (exists) {
      signupMsg.textContent = 'Bu telefon numarası ile zaten başvuru yapılmış.';
      return;
    }
    const newUser = { id: generateId('user'), name, phone, approved: false, createdAt: Date.now() };
    users.push(newUser);
    storage.set('ki_users', users);
    session.setCurrentUser({ phone });
    signupMsg.textContent = 'Kayıt alındı. Admin onayı bekleniyor.';
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = document.getElementById('login-phone').value.trim();
    const users = storage.get('ki_users', []);
    const found = users.find(u => u.phone === phone);
    if (!found) {
      loginMsg.textContent = 'Kayıt bulunamadı. Önce üye olun.';
      return;
    }
    if (!found.approved) {
      loginMsg.textContent = 'Hesabınız admin onayı bekliyor.';
      session.setCurrentUser({ phone });
      return;
    }
    session.setCurrentUser({ phone });
    loginMsg.textContent = 'Giriş başarılı. Yönlendiriliyorsunuz...';
    setTimeout(() => location.href = '/ilan-ver.html', 600);
  });
}