# Neo9 coding style

TSLint coding style inspired from [Airbnb coding style](https://github.com/airbnb/javascript).

## Usage

```bash
yarn add tslint @neo9/n9-coding-style --dev
```

Add a `tslint.json` file in the root directory.

```json
{
  "extends": "@neo9/n9-coding-style"
}
```

## Auto fix errors

TsLint can sometimes auto fix errors.
You can use the local binary.

```bash
./node_modules/.bin/tslint --fix
```
