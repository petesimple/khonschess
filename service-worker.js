const CACHE_NAME = "khonschess-cache-v3.1.1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./style.css",
  "./script.js",

  "./kclogo.png",
  "./khonschess-qr.png",

  "./icon-192.png",
  "./icon-512.png",

  "./stockfish/stockfish-18-lite-single.js",
  "./stockfish/stockfish-18-lite-single.wasm",
  "./stockfish/COPYING.txt",

  "./white-p.png",
  "./black-p.png",
  "./white-r.png",
  "./black-r.png",
  "./white-n.png",
  "./black-n.png",
  "./white-b.png",
  "./black-b.png",
  "./white-q.png",
  "./black-q.png",
  "./white-k.png",
  "./black-k.png",

  "./vendor/chess.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type === "opaque"
          ) {
            return networkResponse;
          }

          const responseCopy = networkResponse.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseCopy);
          });

          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }

          return new Response("Offline file unavailable.", {
            status: 503,
            statusText: "Offline"
          });
        });
    })
  );
});
