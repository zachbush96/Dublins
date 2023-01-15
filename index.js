//Create an Express API that sends a string to an attached device (COM PORT 28)
// and receives a string from the attached device

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;



const { SerialPort } = require('serialport')
var serialPort = new SerialPort({
  path: "COM1",
  baudrate: 9600,
  parser: new ReadlineParser("\r\n"),
  autoOpen: false
});

port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message)
  }

//GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
})

//POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
})

//PUT method route
app.put('/', function (req, res) {
  res.send('PUT request to the homepage');
})

//DELETE method route
app.delete('/', function (req, res) {
  res.send('DELETE request to the homepage');
})

//Listen on port 8080
app.listen(port, function () {
  console.log('Example app listening on port 8080!');
})

//Serial port event listener
//serialPort.on("open", function () {
//  console.log('open');
//  serialPort.on('data', function(data) {
//    console.log('data received: ' + data);
//  });
//  serialPort.write("ls\n", function(err, results) {
//    console.log('err ' + err);
//    console.log('results ' + results);
//  });
//});

//SerialPort.list(function (err, ports) {
//  ports.forEach(function(port) {
//    console.log(port.comName);
//    console.log(port.pnpId);
//    console.log(port.manufacturer);
//    });
//});