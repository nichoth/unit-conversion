var parse = require('./lib/parse.js');

module.exports = function pxToVh(px) {
    return parse(px) / (window.innerHeight / 100);
};
