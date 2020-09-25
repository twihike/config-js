# commitlint-config

[![npm version](https://badge.fury.io/js/%40tkhiking%2Fcommitlint-config.svg)](https://badge.fury.io/js/%40tkhiking%2Fcommitlint-config)

## Installation

With npm:

```shell
npm install --save-dev @commitlint/cli @tkhiking/commitlint-config
```

With yarn:

```shell
yarn add --dev @commitlint/cli @tkhiking/commitlint-config
```

## Usage

Edit `package.json`:

```json
{
  "name": "your-cool-library",
  "version": "0.1.0",
  "commitlint": {
    "extends": [
      "@tkhiking"
    ]
  }
}
```

Or `commitlint.config.js`:

```javascript
module.exports = {
  extends: ['@tkhiking'],
};
```

## License

Copyright (c) 2020 tkhiking. All rights reserved.

This project is licensed under the terms of the MIT license.
