'use strict';

const fs = require('fs');

const path = require('path').join(__dirname, '../');
fs.readdirSync(path).forEach(file => {
    if (!fs.lstatSync(path + file).isDirectory())
        require(`../${file}`);
});