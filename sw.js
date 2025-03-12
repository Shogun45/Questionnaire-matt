const CACHE_NAME = "v1.0.3"
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        }).catch((err) => console.error("Erreur de mise en cache :", err))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Si la ressource est dans le cache, on la renvoie
            if (response) {
                return response;
            }

            // Sinon on essaie de la chercher en ligne
            return fetch(event.request).catch(() => caches.match('/offline.html'));
        })
    );
})