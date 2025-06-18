const CACHE_NAME = "khonschess-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./style.css",
  "./script.js",
  "./kclogo.png",
  "./khonschess-qr.png",
  // Add all sprite assets below:
  "./white-p.png", "./black-p.png",
  "./white-r.png", "./black-r.png",
  "./white-n.png", "./black-n.png",
  "./white-b.png", "./black-b.png",
  "./white-q.png", "./black-q.png",
  "./white-k.png", "./black-k.png",
  "./icon-192.png", "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
