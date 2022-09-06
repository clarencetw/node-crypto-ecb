# node-crypto-ecb

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A Encrypt/Decrypt AES ECB library for NodeJS.

## Install

```bash
npm install crypto-aes-ecb
```

## Usage AES ECB 256

```ts
import { Aes256EcbEncrypt, Aes256EcbDecrypt } from 'crypto-aes-ecb';

const message = 'Hello';
const key = 'secretkey16bytessecretkey16bytes'
const encryptMessage = Aes256EcbEncrypt(message, key);
const result = Aes256EcbDecrypt(encryptMessage, key);
console.log(result) // Hello
```

## Usage AES ECB 192

```ts
import { Aes192EcbEncrypt, Aes192EcbDecrypt } from 'crypto-aes-ecb';

const message = 'Hello';
const key = 'secretkeysecretkey24byte'
const encryptMessage = Aes192EcbEncrypt(message, key);
const result = Aes192EcbDecrypt(encryptMessage, key);
console.log(result) // Hello
```

## Usage AES ECB 128

```ts
import { Aes128EcbEncrypt, Aes128EcbDecrypt } from 'crypto-aes-ecb';

const message = 'Hello';
const key = 'secretkey16bytes'
const encryptMessage = Aes128EcbEncrypt(message, key);
const result = Aes128EcbDecrypt(encryptMessage, key);
console.log(result) // Hello
```

[build-img]:https://github.com/clarencetw/node-crypto-ecb/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/clarencetw/node-crypto-ecb/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/crypto-aes-ecb
[downloads-url]:https://www.npmtrends.com/crypto-aes-ecb
[npm-img]:https://img.shields.io/npm/v/crypto-aes-ecb
[npm-url]:https://www.npmjs.com/package/crypto-aes-ecb
[issues-img]:https://img.shields.io/github/issues/clarencetw/node-crypto-ecb
[issues-url]:https://github.com/clarencetw/node-crypto-ecb/issues
[codecov-img]:https://codecov.io/gh/clarencetw/node-crypto-ecb/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/clarencetw/node-crypto-ecb
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
