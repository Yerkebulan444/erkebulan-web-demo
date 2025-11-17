// simple service worker for PWA caching
const CACHE_NAME = 'erkebulan-cache-v1';
const FILES_TO_CACHE = [
  '/erkebulan-web-demo/',
  '/erkebulan-web-demo/index.html',
  '/erkebulan-web-demo/sample_signals.json',
  '/erkebulan-web-demo/assets/icon-192.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(resp => resp || fetch(evt.request))
  );
});
