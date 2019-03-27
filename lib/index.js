'use strict';

const classMethodsUseThis = require('./rules/class-methods-use-this');

module.exports = {
    rules: {
        'class-methods-use-this': classMethodsUseThis
    }
];
