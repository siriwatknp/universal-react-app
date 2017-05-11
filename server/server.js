import express from 'express';
import React from 'react';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const app = express();
// Start the server
const PORT = process.env.PORT || 8080;
const isDeveloping = process.env.NODE_ENV !== 'production';

if(isDeveloping){
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler))
}


app.use((req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <title>Wiki!</title>
    </head>
    <body>
      <div id='root'></div>
      <script src='bundle.js'></script>
    </body>
  </html>
  `;

  res.end(html)
});



app.listen(PORT, (err) => {
  if (err) {
    console.log('err', err)
  }
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
