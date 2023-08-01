/* (node:8058) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/flavio/Desktop/exports2/index.js:1
import axios from 'axios';
^^^^^^

SyntaxError: Cannot use import statement outside a module */

//import axios from 'axios';

const axios = require('axios');

axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
});