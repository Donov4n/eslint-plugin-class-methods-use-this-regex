'use strict';

const { Linter } = require('eslint');
const ruleComposer = require('eslint-rule-composer');

const classMethodsUseThisRule = new Linter().getRules().get('class-methods-use-this');

module.exports = ruleComposer.filterReports(
    classMethodsUseThisRule,
    ({ node }, { options }) => {
        const methodName = node.parent.key.name;
        const exceptMethods = options.exceptMethods || [];
        return !exceptMethods.some(item => new RegExp(item).test(methodName));
    },
);
