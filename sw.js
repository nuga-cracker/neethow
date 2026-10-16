// 한 번 열어본 뒤에는 오프라인에서도 열리도록 캐시합니다.
// index.html 내용을 고쳤다면 아래 VERSION 숫자를 올려주세요.
var VERSION = "neethow-v3";
var CORE = ["./", "index.html", "manifest.webmanifest", "favicon.svg", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(CORE); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== VERSION; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var ok = url.origin === self.location.origin || /(^|\.)(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!ok) return;
  e.respondWith(
    caches.open(VERSION).then(function(cache){
      return cache.match(req, { ignoreSearch: true }).then(function(hit){
        var net = fetch(req).then(function(res){
          if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
          return res;
        }).catch(function(){ return hit || (req.mode === "navigate" ? cache.match("index.html") : undefined); });
        return hit || net;
      });
    })
  );
});
