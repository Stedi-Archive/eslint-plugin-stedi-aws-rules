# eslint-plugin-stedi-aws-rules

Best practices around using AWS SDK in Javascript & Typescript projects.

References:

- https://pages.awscloud.com/rs/112-TZM-766/images/2020_0316-SRV_Slide-Deck.pdf

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-stedi-aws-rules`:

```
$ npm install eslint-plugin-stedi-aws-rules --save-dev
```

## Usage

Add `stedi` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@stedi/stedi-aws-rules"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@stedi/stedi-aws-rules/no-aws-import": "error",
    "@stedi/stedi-aws-rules/instrument-aws-clients": "error",
    "@stedi/stedi-aws-rules/instrument-document-clients": "error"
  }
}
```

## Supported Rules

- [@stedi/stedi-aws-rules/no-aws-import](docs/rules/no-aws-import.md)
- [@stedi/stedi-aws-rules/instrument-aws-clients](docs/rules/instrument-aws-clients.md)
- [@stedi/stedi-aws-rules/instrument-document-clients](docs/rules/instrument-document-clients.md)

## Contributing

As Stedi uses this for own projects, we know this might not be the perfect approach for all the projects out there. If you have any ideas, just open an issue and tell us you think.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## Release procedure

This project is using Github Actions for releasing new versions of the library. To release a new version:

```sh
git tag -a vX.X.X -m "<release message"
git push --tags
```

Based on this tag information, new release and package version will be created.

## License

[MIT License](https://opensource.org/licenses/MIT) © [Stedi](https://stedi.com)
