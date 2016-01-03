'use strict';

const fs = require('fs');

const file = fs.readFileSync('index.html')
  .toString()
  .replace(/"/g, '\'')
  .replace(/\n/g, '"\n\tw "');

fs.writeFileSync('out', file);
