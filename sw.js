const CACHE = "tgms-pegadapally-phase1-v2";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./assets/app-icon.svg"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Never cache Firebase or other third-party requests.
  if (req.mode === "navigate") {
    event.respondWith(fetch(req).then(response => { const copy=response.clone(); caches.open(CACHE).then(c=>c.put("./index.html",copy)); return response; }).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => { if (response.ok) { const copy=response.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); } return response; })));
});
