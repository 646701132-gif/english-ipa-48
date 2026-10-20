
const SHELL = 'ipa48-shell-v2';
const AUDIO = 'ipa48-audio-v2';
const SHELL_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL).then(cache => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(k => ![SHELL, AUDIO].includes(k))
            .map(k => caches.delete(k))
        )
      )
    ])
  );
});

async function rangeResponse(request, cachedResponse) {
  const range = request.headers.get('range');
  if (!range) return cachedResponse;

  const bytes = await cachedResponse.arrayBuffer();
  const total = bytes.byteLength;

  const match = /bytes=(\d*)-(\d*)/.exec(range);
  if (!match) return cachedResponse;

  let start = match[1] ? parseInt(match[1], 10) : 0;
  let end = match[2] ? parseInt(match[2], 10) : total - 1;

  if (!match[1] && match[2]) {
    const suffix = parseInt(match[2], 10);
    start = Math.max(total - suffix, 0);
    end = total - 1;
  }

  if (start >= total) {
    return new Response(null, {
      status: 416,
      headers: { 'Content-Range': `bytes */${total}` }
    });
  }

  end = Math.min(end, total - 1);
  const sliced = bytes.slice(start, end + 1);

  const headers = new Headers(cachedResponse.headers);
  headers.set('Content-Range', `bytes ${start}-${end}/${total}`);
  headers.set('Content-Length', String(sliced.byteLength));
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Type', headers.get('Content-Type') || 'audio/mpeg');

  return new Response(sliced, {
    status: 206,
    statusText: 'Partial Content',
    headers
  });
}

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = request.url;

  if (url.includes('raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/')) {
    event.respondWith((async () => {
      const cache = await caches.open(AUDIO);

      // Cache key without Range header.
      const baseRequest = new Request(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit'
      });

      let cached = await cache.match(baseRequest);

      if (!cached) {
        try {
          const fresh = await fetch(baseRequest);
          if (fresh && fresh.ok) {
            await cache.put(baseRequest, fresh.clone());
            cached = fresh;
          }
        } catch (e) {
          // offline and not cached
        }
      }

      if (!cached) return Response.error();
      return rangeResponse(request, cached.clone());
    })());
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        caches.open(SHELL).then(cache => cache.put(request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
