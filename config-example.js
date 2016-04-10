var config = {};

config.ssh = {
  host: 'yourhost',
  port: 22,
  username: 'yourusername',
  privateKey: require('fs').readFileSync('path/to/your/id_rsa')
};


module.exports = config;
