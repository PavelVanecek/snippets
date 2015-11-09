// xHRLib.js
function get(url, cb) {
  if cache[url] {
    return cb(cache[url])
  } else {
    var xhr = new XmlHTTPRequest(url)
    xhr.on("statechange", function(status) {
      cb()
    })
    xhr.send()
  }
}
