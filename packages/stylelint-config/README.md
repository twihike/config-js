# stylelint-config

[![npm version](https://badge.fury.io/js/%40twihike%2Fstylelint-config.svg)](https://badge.fury.io/js/%40twihike%2Fstylelint-config)

## Installation

With npm:

```shell
npm install --save-dev stylelint @twihike/stylelint-config
npm install --save-dev prettier @twihike/prettier-config
```

With yarn:

```shell
yarn add --dev stylelint @twihike/stylelint-config
yarn add --dev prettier @twihike/prettier-config
```

## Usage

Edit `package.json`:

```json
{
  "name": "your-cool-library",
  "version": "0.1.0",
  "stylelint": {
    "extends": "@twihike/stylelint-config"
  }
}
```

Or `stylelint.config.js`:

```javascript
module.exports = {
  extends: '@twihike/stylelint-config',
};
```

## Related projects

- [prettier-config](https://github.com/twihike/config-js/packages/prettier-config)

## License

This project is licensed under the terms of the MIT license.

Copyright (c) 2020 twihike.
