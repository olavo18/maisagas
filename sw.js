const CACHE_NAME = 'maisa-gas-v1';
const assets = ['index.html', 'logo.png', 'favicon.png', 'gas.png', 'agua_font_life.png'];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
