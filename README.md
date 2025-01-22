# eslint-plugin-class-methods-use-this-regex

An enhanced version of the [ESLint class-methods-use-this rule](http://eslint.org/docs/rules/class-methods-use-this) with RegExp `exceptMethods` option.

## Installation

Install [ESLint](http://eslint.org) and `eslint-plugin-class-methods-use-this-regex`:

```bash
# - NPM
npm i eslint eslint-plugin-class-methods-use-this-regex --save-dev

# - Yarn
yarn add eslint eslint-plugin-class-methods-use-this-regex --dev
```

## Usage

Add `class-methods-use-this-regex` to the plugins section of your `eslint.config.mjs` configuration file, and  
configure the rule under the rules section. Don't forget to disable the core rule `class-methods-use-this`:

```js
import classMethodsUseThisRegex from 'eslint-plugin-class-methods-use-this-regex';

export default [
    plugins: {
        'class-methods-use-this-regex': classMethodsUseThisRegex,
    },
    rules: {
        'class-methods-use-this': ['off'],
        'class-methods-use-this-regex/class-methods-use-this': ['error', {
            'exceptMethods': ['^render.*$'],
        }],
    },
];
```

... Or if you're still using the old configuration system, add this to your `.eslintrc.json`:

```json
{
    "plugins": ["class-methods-use-this-regex"],
    "rules": {
        "class-methods-use-this": ["off"],
        "class-methods-use-this-regex/class-methods-use-this": ["error", {
            "exceptMethods": ["^render.*$"]
        }]
    }
}
```
