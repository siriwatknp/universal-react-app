/**
 * Entry Script
 */

if(process.env.NODE_ENV === 'production'){
  process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
  process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
  // In production, serve the webpacked server file.
  require('./dist/server.bundle.js');
} else {
  require('babel-core/register')({
    presets: ['es2015','react']
  });

  require('./server/server')
}