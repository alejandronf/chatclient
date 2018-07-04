// var socket = require("socket.io-client")
// socket.connect('wss://pushstream.tradingview.com/message-pipe-ws/private_vtm40hahbEOqdSl1nm9IBuGjobNtIFmgOSMFAsOh41M', {secure: true});
// s
// ocket.on('connect', function () {
//   console.log('Connected to server');
// });
//var socket = require('socket.io-client');
//socket.connect('wss://pushstream.tradingview.com/message-pipe-ws/private_vtm40hahbEOqdSl1nm9IBuGjobNtIFmgOSMFAsOh41M', {secure: true});
// with ES6 import
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            //console.log("Received: '" + message.utf8Data + "'");
            console.log("Received: " );
            console.log(message.utf8Data);

        }
    });

    function sendNumber() {
        if (connection.connected) {
            // var number = Math.round(Math.random() * 0xFFFFFF);
            // connection.sendUTF(number.toString());
            // setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});

client.connect('ws://localhost:3000/socket.io/');
//client.connect('wss://prodata.tradingview.com/socket.io/websocket?from=chart%2FiRC6Sw2a%2F&date=2018_06_28-12_27');
