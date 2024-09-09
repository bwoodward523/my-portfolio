const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/embed-upload',
    createProxyMiddleware({
      target: 'https://itch.io',
      changeOrigin: true,
      onProxyRes: function (proxyRes) {
        proxyRes.headers['Cross-Origin-Opener-Policy'] = 'same-origin';
        proxyRes.headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
      }
    })
  );
};