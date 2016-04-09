# rokku
simple CLI tool for creating an managing Dokku apps


# Install
Clone this repo and add a new config.json:

```javascript

var config = {};

config.ssh = {
  host: 'yourhost',
  port: 22,
  username: 'yourusername',
  privateKey: require('fs').readFileSync('path/to/your/id_rsa')
};


module.exports = config;

```
