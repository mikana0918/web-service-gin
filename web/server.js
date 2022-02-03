const express = require('express');
const next = require('next');

const { createProxyMiddleware } = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const API_URL = process.env.API_HOST || 'http://localhost:8080'

console.log("🛠🛠🛠 logging config")
console.log("🛠🛠🛠 process.env.API_HOST")
console.log(process.env.API_HOST)
console.log("🛠🛠🛠 process.env.API_HOST")
console.log(process.env.APP_DOMAIN)
console.log("🛠🛠🛠 process.env.APP_DOMAIN")

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use(
    '/api',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true
    })
  );

  server.all('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
});