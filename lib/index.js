'use strict';

const { name, version } = require('../package.json');
const classMethodsUseThis = require('./rules/class-methods-use-this');

module.exports = {
    meta: {
        name,
        version,
    },
    rules: {
        'class-methods-use-this': classMethodsUseThis,
    },
};
