/**
 * Entry Script
 */

if(process.env.NODE_ENV === 'production'){

} else {
  require('babel-core/register')({
    presets: ['es2015','react']
  });

  require('./server/server')
}