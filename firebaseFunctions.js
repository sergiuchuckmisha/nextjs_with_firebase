const { join } = require('path')
const { https } = require('firebase-functions')
const { default: next } = require('next')

const isDev = process.env.NODE_ENV !== 'production'
const nextjsDistDir = join('src', require('./src/next.config.js').distDir)

const nextjsServer = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()

exports.auth = https.onRequest((req, res) => {
  console.log("req: " + req)
  console.log(simpleStringify(req))
  return nextjsServer.prepare().then(() => nextjsHandle(req, res))
})


function simpleStringify (object){
  var simpleObject = {};
  for (var prop in object ){
    if (!object.hasOwnProperty(prop)){
      continue;
    }
    if (typeof(object[prop]) == 'object'){
      continue;
    }
    if (typeof(object[prop]) == 'function'){
      continue;
    }
    simpleObject[prop] = object[prop];
  }
  return JSON.stringify(simpleObject); // returns cleaned up JSON
};
