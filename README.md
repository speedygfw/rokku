# rokku
simple CLI tool for creating an managing Dokku apps.



# Install
```javascript
npm install rokku
```
Setup auth


```javascript

npm config set rokku:username 'yourusername'
npm config set rokku:host 'example.com'
npm config set rokku:port 22
npm config set rokku:keypath 'C:/Users/fwall/.ssh/id_rsa'


```
you can also setup a password instead of privatekey

# Usage

You can use all dokku commands.

Examples:

```javascript
rokku //displays all commands
rokku apps //displays all apps
rokku deploy appname //deploy your app

```
