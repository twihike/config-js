# eslint-config

[![npm version](https://badge.fury.io/js/%40twihike%2Feslint-config.svg)](https://badge.fury.io/js/%40twihike%2Feslint-config)

## Installation

With npm:

```shell
npm install --save-dev eslint @twihike/eslint-config \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-eslint-comments \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-node \
  eslint-plugin-prettier \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-unicorn
npm install --save-dev prettier @twihike/prettier-config
npm install --save-dev typescript
```

With yarn:

```shell
yarn add --dev eslint @twihike/eslint-config \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-eslint-comments \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-node \
  eslint-plugin-prettier \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-unicorn
yarn add --dev prettier @twihike/prettier-config
yarn add --dev typescript
```

## Usage

Edit `package.json`:

```json
{
  "name": "your-cool-library",
  "version": "0.1.0",
  "eslintConfig": {
    "extends": "@twihike"
  }
}
```

Or `eslintrc.js`:

```javascript
module.exports = {
  extends: '@twihike',
};
```

## Related projects

- [prettier-config](https://github.com/twihike/config-js/packages/prettier-config)

## License

Copyright (c) 2020 twihike. All rights reserved.

This project is licensed under the terms of the MIT license.
