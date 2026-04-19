self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
  // This allows the app to load from cache/internet
  event.respondWith(fetch(event.request));
});
