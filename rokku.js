




var Client = require('ssh2').Client;
var config = require('./config');


var conn = new Client();
conn.on('ready', function() {
  console.log('Client connect');
  var dokkuparam = process.argv;
  dokkuparam.shift();
  dokkuparam.shift();
  conn.exec('dokku ' + dokkuparam.join(' '), function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      conn.end();
    }).on('data', function(data) {
      console.log('Dokku: ' + data);
    }).stderr.on('data', function(data) {
    });
  });
}).connect(config.ssh);
