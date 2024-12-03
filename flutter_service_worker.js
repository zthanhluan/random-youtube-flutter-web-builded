'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a549a7e752a0f6e86b39d4a2211e28b6",
"assets/AssetManifest.bin.json": "95d0c10bf49891f7988807d6abb1808b",
"assets/AssetManifest.json": "e59b70faddce480fdb6c7f8c3492f04e",
"assets/assets/icon.png": "1e02f001ca75a78b974678e1f1d04717",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a09c9b2a4d4cfd699c4e9bc8af574fba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"create-fileIndex.jsonOld.py": "6ad815c75eaf6c23cbac41e5e2f97e3d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fileIndex.json": "9047c830d857f33014ae9cdbe18cd9ba",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5f8be598750de33f755d73b68b692d1b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "4379140b3fa5f5d6e20d5cfb4f56ace0",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"script.js": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "15235b5108d6a877ef74fe3317a96bf7",
"videoIds-All.json": "c51a48b1b52e3b0693972507f0dd9057",
"videoIds-Comedy.json": "aaf0da8d747dfcd2476fcc0fea70d49a",
"videoIds-Education.json": "f6cdf3ba461a84d3460ebeeb64aee180",
"videoIds-EnglishAPTIS.json": "e3f3c703d77cf625fcd4eb1af6d56d11",
"videoIds-EnglishIELTS.json": "059084017a7f16675b88da8bd5b9ece4",
"videoIds-EnglishPodcast.json": "e8ba1641708234ce2a604972df7dd619",
"videoIds-EnglishPodcasts.json": "99fffa157a2d5d99e31f7f89eb1ea19e",
"videoIds-EnglishSpeaking.json": "ab1c626327e44d029764739f78de7892",
"videoIds-EnglishTOEIC.json": "ebec4922159e9e8297e91f1810a80666",
"videoIds-EnglishVSTEP.json": "d6c5f31ab97da27aa9235c3f82903403",
"videoIds-Food.json": "b20749cc30ff061743346b79cf779b67",
"videoIds-Game.json": "0261552e3f5ab13cdc5a3a6d9e72d3a1",
"videoIds-IELTS.json": "465a6e55b7f7a2b32f2a9e67f8317d6e",
"videoIds-ListeningTime.json": "6179cfa39b4b921a7460b996d78481f8",
"videoIds-mostviewed.json": "4f9a5d283efafbecd671a8c203ee67a5",
"videoIds-Motivation.json": "68749baa65a34b2808849e2811fd6f5a",
"videoIds-Movies.json": "155992bcb555621560e968627eac67cc",
"videoIds-Music.json": "08f96897ed025b4e1903e9b62ade22cc",
"videoIds-MusicVevo.json": "5ebc587333381bab783392f64c1bf44f",
"videoIds-newest.json": "2bffd7c458ea889ea5852c889acf80e9",
"videoIds-News.json": "bc9358431d797e974bbd4e575a8ee7fe",
"videoIds-Podcast.json": "05f032d8eacba45f7e9e77e17a01d22b",
"videoIds-Sport.json": "ecb80df2db1656a1a1238053b6687148",
"videoIds-Tech.json": "499fd0108dcde8e68f08cc02b9fc6e35",
"videoIds-Test.json": "be63c6c2a8afdae3b3f3e6b104dcdb29",
"videoIds-TOEIC.json": "007c7e21bab9dd599d353eb3ebbfd50b",
"videoIds-TOPSONG2024.json": "a7a5b156ae92ae90fdf9fbd1ac63c99d",
"videoIds-Travel.json": "61a37674cdbd3ee674688844c150a3e7",
"videoIds-Trend.json": "1d6109e5f028a6b86287e14e31eb3e82"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
