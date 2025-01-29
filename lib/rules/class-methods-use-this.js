'use strict';

const { builtinRules } = require('eslint/use-at-your-own-risk');
const ruleComposer = require('eslint-rule-composer');

const classMethodsUseThisRule = builtinRules.get('class-methods-use-this');

module.exports = ruleComposer.filterReports(
    classMethodsUseThisRule,
    ({ node }, { options }) => {
        const methodName = node.parent.key.name;
        const exceptMethods = options.exceptMethods || [];
        return !exceptMethods.some(item => new RegExp(item).test(methodName));
    },
);
