// jQuery.fn.jquery
// 2.1.2

+function() {
  var list = document.body.getElementById('#mylist')
  var items = list.getElementsByTagName('li')

  // fetch meeting rooms list and populate it to DOM
  jQuery.get('/meeting-rooms', function(data) {
    var rooms = data.rooms
    for (i = rooms.length; i > 0; i--) {
      var child = document.createElement('li')
      child.id = rooms[i].id
      child.innerHTML = rooms[i].name
      list.appendChild(child)
    }
  })

  // fetch data from calendar
  // and mark those rooms which are unavailable right now
  jQuery.get('/calendar/now', function(data) {
    calendar = data.calendar
    var i = calendar.length
    while (i > 0) {
      i--;
      items
        .getElementById(calendar[i].room.id)
        .addClass('occupied')
    }
  })
}()

// What if instead of jQuery.get we use xhrLib.get? (see "xhrLib.js")
