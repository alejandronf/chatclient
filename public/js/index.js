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
socket.on('newLocationMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank"> My current location </a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  var messageTextBox =  jQuery('[name=message]');
  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()
  }, function () {
    messageTextBox.val('');
  });
});

var locationbutton = jQuery('#send-location');
locationbutton.on('click', function (e) {
  if(!navigator.geolocation){
    return alert('Geolocation doesn\'t supported by your browser' );
  }
  locationbutton.attr('disabled', 'disabled').text('Sending location ...');
  navigator.geolocation.getCurrentPosition(function (position) {
  locationbutton.removeAttr('disabled', 'disabled').text('Send location');
  socket.emit('createLocationMessage',{
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  })
  console.log(position);
  },function() {
    locationbutton.removeAttr('disabled', 'disabled').text('Send location');;
    alert('Unable to fetch location.')
  })
})
