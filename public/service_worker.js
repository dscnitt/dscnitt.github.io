
const staticCacheName = "site-static-v0.0.5"
const assets = [
	'/',
	'/index.html',
	'/global.css',
	'/responsive.css',
	'/bundle.js',
	'/images/assets/technologies/cloud.png',
	'/images/assets/technologies/android.png',
	'/images/assets/technologies/mi.png',
	'/images/assets/technologies/web.png',
	'/images/assets/diversity.png',
	'/images/logos/h_dark.png',
	'/images/logos/v_light.png',
	'/images/icons/icon-128x128.png',
	'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
	'https://code.jquery.com/jquery-3.5.1.slim.min.js',
	'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
	'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
	'https://fonts.googleapis.com/css?family=Google+Sans:400,500,700|Material+Icons',
	'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
]
self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
			.then(cache => {
				cache.addAll(assets)
			})
	)
})

self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(
				keys.filter(key => key != staticCacheName)
					.map(key => caches.delete(key))
			)
		})
	)
})

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
			.then(res => {
				return res || fetch(event.request)
			})
	)
})
