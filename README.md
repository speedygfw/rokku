# rokku
simple CLI tool for creating an managing Dokku apps.



# Install
Clone this repo and add a new config.json:

```javascript

var config = {};

config.ssh = {
  host: 'yourhost',
  port: 22,
  username: 'yourusername',
  privateKey: require('fs').readFileSync('path/to/your/id_rsa')
  //password: 'yourpassword'
};


module.exports = config;

```
you can also setup a password instead of privatekey in config.ssh

# Usage

You can use all dokku commands.

Examples:

```javascript
node rokku.js //displays all commands
node rokku.js apps //displays all apps
node rokku.js deploy appname //deploy your app

```

Hint:
You can also use the bash script: rokku.sh
