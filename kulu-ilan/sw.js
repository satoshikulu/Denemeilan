const CACHE_NAME = 'kulu-ilan-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/listings.html',
  '/login.html',
  '/ilan-ver.html',
  '/listing-detail.html',
  '/assets/css/styles.css',
  '/assets/js/utils.js',
  '/assets/js/data.js',
  '/assets/js/app.js',
  '/assets/js/auth.js',
  '/assets/js/listings.js',
  '/assets/js/admin.js',
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  e.respondWith(caches.match(req).then(cached => cached || fetch(req)));
});