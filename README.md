# Example Package Built for React & Preact

Tiny template one could use to create a library that supports both React & Preact, without relying upon `preact/compat`.

This runs [`microbundle`](https://github.com/developit/microbundle) in two passes to generate the output for each UI library. To make things a bit simpler, the library is authored in Preact so that we can alias `preact/hooks` to `react` for the React build -- going the other way is a bit more difficult as Preact splits up core (such as `Component`) from hooks (`useState`).

## Usage

```sh
$ yarn && yarn build
```

Generates `./dist/{react,preact}`, each containing a ES5 CJS & ES2017 ESM bundle. Uses `package.json#exports` to expose these bundles, allowing you to access them by doing the following:

```js
// ESM
import { MyCounter } from 'my-lib/react';
import { MyCounter } from 'my-lib/preact';

// CJS
const { MyCounter } = require('my-lib/react');
const { MyCounter } = require('my-lib/preact');
```

## License

[MIT](https://github.com/rschristian/react-preact-lib/blob/master/LICENSE)
