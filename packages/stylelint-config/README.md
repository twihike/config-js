# stylelint-config

[![npm version](https://badge.fury.io/js/%40tkhiking%2Fstylelint-config.svg)](https://badge.fury.io/js/%40tkhiking%2Fstylelint-config)

## Installation

With npm:

```shell
npm install --save-dev stylelint @tkhiking/stylelint-config
npm install --save-dev prettier @tkhiking/prettier-config
```

With yarn:

```shell
yarn add --dev stylelint @tkhiking/stylelint-config
yarn add --dev prettier @tkhiking/prettier-config
```

## Usage

Edit `package.json`:

```json
{
  "name": "your-cool-library",
  "version": "0.1.0",
  "stylelint": {
    "extends": "@tkhiking/stylelint-config"
  }
}
```

Or `stylelint.config.js`:

```javascript
module.exports = {
  extends: '@tkhiking/stylelint-config',
};
```

## Related projects

- [prettier-config](https://github.com/tkhiking/config-js/packages/prettier-config)

## License

Copyright (c) 2020 tkhiking. All rights reserved.

This project is licensed under the terms of the MIT license.
