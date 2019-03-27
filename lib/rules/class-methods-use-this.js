'use strict';

const classMethodsUseThis = require('eslint/lib/rules/class-methods-use-this');

module.exports = {
    meta: classMethodsUseThis.meta,
    create(context) {
        const config        = Object.assign({}, context.options[0]);
        const exceptMethods = config.exceptMethods || [];

        const proxyContext = Object.assign({}, context);
        proxyContext.report = function report(...args) {
            const node       = args.length === 1 ? args[0].node : args[0];
            const methodName = node.parent.key.name;

            if (exceptMethods.some(item => new RegExp(item).test(methodName))) {
                return;
            }

            context.report(...args);
        };

        return classMethodsUseThis.create(proxyContext);
    }
};