// var socket = require("socket.io-client")
// socket.connect('wss://pushstream.tradingview.com/message-pipe-ws/private_vtm40hahbEOqdSl1nm9IBuGjobNtIFmgOSMFAsOh41M', {secure: true});
// s
// ocket.on('connect', function () {
//   console.log('Connected to server');
// });
//var socket = require('socket.io-client');
//socket.connect('wss://pushstream.tradingview.com/message-pipe-ws/private_vtm40hahbEOqdSl1nm9IBuGjobNtIFmgOSMFAsOh41M', {secure: true});
// with ES6 import
var socket = require('engine.io-client')('wss://pushstream.tradingview.com/message-pipe-ws/private_vtm40hahbEOqdSl1nm9IBuGjobNtIFmgOSMFAsOh41M');
socket.on('connect', function () {
  console.log('Connected to server');
});
socket.on('open', function(){
  socket.on('message', function(data){});
  socket.on('close', function(){});
});
//client.connect('wss://pushstream.tradingview.com/message-pipe-ws/private_vtm40hahbEOqdSl1nm9IBuGjobNtIFmgOSMFAsOh41M');
//client.connect('wss://prodata.tradingview.com/socket.io/websocket?from=chart%2FiRC6Sw2a%2F&date=2018_06_28-12_27');
