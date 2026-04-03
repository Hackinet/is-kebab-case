# is-kebab-case

[![npm version](https://img.shields.io/npm/v/is-kebab-case.svg)](https://www.npmjs.com/package/is-kebab-case)
[![npm downloads](https://img.shields.io/npm/dm/is-kebab-case.svg)](https://www.npmjs.com/package/is-kebab-case)
[![bundle size](https://img.shields.io/bundlephobia/minzip/is-kebab-case)](https://bundlephobia.com/package/is-kebab-case)
[![license](https://img.shields.io/npm/l/is-kebab-case.svg)](https://github.com/Hackinet/is-kebab-case/blob/master/LICENSE)

> Check if a string is kebab-case

A tiny, zero-dependency utility that returns `true` if a string is valid [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case) (lowercase words separated by hyphens). Built with TypeScript — types included out of the box.

## What is kebab-case?

Kebab-case is a naming convention where words are lowercase and separated by hyphens:

- `hello-world` — kebab-case
- `my-component-name` — kebab-case
- `helloWorld` — not kebab-case (camelCase)
- `hello_world` — not kebab-case (snake_case)
- `HelloWorld` — not kebab-case (PascalCase)

## Install

```sh
npm install is-kebab-case
```

## Usage

```ts
import { isKebabCase } from "is-kebab-case";

isKebabCase("foo-bar");       // true
isKebabCase("foo-bar-baz");   // true
isKebabCase("hello");         // true
isKebabCase("h1-heading");    // true

isKebabCase("fooBar");        // false (camelCase)
isKebabCase("foo_bar");       // false (snake_case)
isKebabCase("FooBar");        // false (PascalCase)
isKebabCase("FOO-BAR");       // false (uppercase)
isKebabCase("");              // false (empty string)
isKebabCase("-foo");          // false (leading hyphen)
isKebabCase("foo-");          // false (trailing hyphen)
isKebabCase("foo--bar");      // false (consecutive hyphens)
isKebabCase("123-bar");       // false (starts with number)
```

## CommonJS

```js
const { isKebabCase } = require("is-kebab-case");
```

## TypeScript

Types are included — no need to install `@types/is-kebab-case`.

```ts
import { isKebabCase } from "is-kebab-case";
// isKebabCase(str: string) => boolean
```

## Related

- [is-camel-case](https://www.npmjs.com/package/is-camel-case) — Check if a string is camelCase

## License

[MIT](LICENSE) - Piyush Jha
