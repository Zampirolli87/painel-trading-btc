self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', function(event) {
  // Você pode colocar lógica de cache aqui se quiser
});