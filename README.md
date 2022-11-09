# Neo9 coding style

ESLint coding style inspired from [Airbnb coding style](https://github.com/airbnb/javascript).

:warning: Drop NodeJS 12 support stating with version 4

## Usage

```bash
yarn add @neo9/n9-coding-style --dev
```

Add a `.eslintrc.yaml` file in the root directory.

```yaml
extends:
  - './node_modules/@neo9/n9-coding-style/.eslintrc.yaml'
```

Add a `lint` script to your `package.json` :

```json
{
  ...
  "lint": "eslint --config .eslintrc.yaml '{src,test}/**/*.ts'",
  ...
}
```

Example of usage :

- https://github.com/neo9/n9-node-routing
- https://github.com/neo9/n9-mongo-client

## Auto fix errors

EsLint can sometimes auto fix errors.
You can use the local binary.

```bash
npx eslint --fix '{src,test}/**/*.ts'
```
