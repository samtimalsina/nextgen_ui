(function (window, navigator) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful.
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // Registration failed.
        console.error('ServiceWorker registration failed: ', err);
      });
    });
  }
  else {
    console.error('ServiceWorker is not supported.');
  }

})(window, navigator);
