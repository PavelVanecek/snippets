// xHRLib.js

/* eslint-env browser */

'use strict'

const cache = {}
function get(url, cb) { // eslint-disable-line no-unused-vars
  if (cache[url]) {
    cb(cache[url])
    return
  }
  const xhr = new window.XmlHTTPRequest(url)
  xhr.on('statechange', status => {
    if (status === 4) {
      cache[url] = xhr.responseText
      cb(xhr.responseText)
    }
  })
  xhr.send()
}
