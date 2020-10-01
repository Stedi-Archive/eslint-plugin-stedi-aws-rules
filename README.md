# eslint-plugin-stedi

Best practices around using AWS SDK in Javascript & Typescript projects.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-stedi`:

```
$ npm install eslint-plugin-stedi --save-dev
```

## Usage

Add `stedi` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["stedi"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "stedi/no-aws-import": true
  }
}
```

## Supported Rules

- [@stedi/no-aws-import](docs/rules/no-aws-import.md)
- [@stedi/instrument-aws-clients](docs/rules/instrument-aws-clients.md)
- [@stedi/instrument-document-clients](docs/rules/instrument-document-clients.md)

## Contributing

As Stedi uses this for own projects, we know this might not be the perfect approach for all the projects out there. If you have any ideas, just open an issue and tell me us you think.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

[MIT License](https://opensource.org/licenses/MIT) © [Stedi](https://stedi.com)
