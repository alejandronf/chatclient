var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});

var locationbutton = jQuery('#send-location');
locationbutton.click( function (e) {
  if(!navigator.geolocation){
    return alert('Geolocation doesn\'t supported by your browser' );
  }
  navigator.geolocation.getCurrentPosition(function (position) {
  socket.emit('createLocationMessage',{
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  })
  console.log(position);
  },function() {
    alert('Unable to fetch location.')
  })
})