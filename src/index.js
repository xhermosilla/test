const utils = require('./utils');

function hello(name) {
    return `Hello ${name}`;
}

function bye(name) {
    return `Bye ${name}`;
}

module.exports = {
    hello,
    bye
};
