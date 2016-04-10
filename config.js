var config = {};

config.ssh = {
  host: 'wall-it.net',
  port: process.env.npm_package_config_port,
  username: 'root',
  privateKey: require('fs').readFileSync('C:/Users/fwall/.ssh/id_rsa')
};


module.exports = config;
