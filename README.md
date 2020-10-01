# eslint-rules-aws-stedi

Best practices around using AWS SDK in Javascript & Typescript projects.

References:
- https://pages.awscloud.com/rs/112-TZM-766/images/2020_0316-SRV_Slide-Deck.pdf

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-rules-aws-stedi`:

```
$ npm install eslint-rules-aws-stedi --save-dev
```

## Usage

Add `stedi` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["eslint-rules-aws-stedi"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "eslint-rules-aws-stedi/no-aws-import": true
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
