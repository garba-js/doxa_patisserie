const CACHE_NAME = 'doxa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/styles/product.css',
  '/styles/about.css',
  '/script/doxa.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

