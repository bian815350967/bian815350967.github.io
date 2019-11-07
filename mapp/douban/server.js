const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use('/static', express.static(`${__dirname}/static`));
app.use('/v2', proxy({
  target: 'https://api.douban.com/v2/movie',
  changeOrigin: true
}));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.listen(9002);

console.log('服务器开启成功\n\n访问路径为http://localhost:9002\n');

