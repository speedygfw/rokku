var config = {};

config.ssh = {
  host: process.env.npm_package_config_hostname,
  port: process.env.npm_package_config_port,
  username: process.env.npm_package_config_username,
  privateKey: require('fs').readFileSync(process.env.npm_package_keypath)
};


module.exports = config;
