# is-kebab-case

> Check if a string is kebab-case

## Install

```sh
npm install is-kebab-case
```

## Usage

```ts
import { isKebabCase } from "is-kebab-case";

isKebabCase("foo-bar"); // true
isKebabCase("foo-bar-baz"); // true
isKebabCase("fooBar"); // false
isKebabCase("foo_bar"); // false
isKebabCase("FooBar"); // false
```

## CommonJS

```js
const { isKebabCase } = require("is-kebab-case");
```

## License

MIT
