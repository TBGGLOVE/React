const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    }),
  );
  app.use(
    '/api2/v1',
    createProxyMiddleware({
      target: 'http://localhost:8070',
      changeOrigin: true,
    }),
  );

  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    }),
  );
};
