## [1.5.2](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.5.1...v1.5.2) (2022-04-20)


### Bug Fixes

* allow newer versions of eslint ([773aa06](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/773aa06fdbd49bf65253b3329ec9e83394b5731f))

## [1.5.1](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.5.0...v1.5.1) (2020-10-30)


### Bug Fixes

* fix issue with direct call expressions, add test ([#25](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/issues/25)) ([dfb63bc](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/dfb63bc71c4366cdd23cdd0b7516f1ebd416d26d))

# [1.5.0](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.4.0...v1.5.0) (2020-10-30)


### Features

* publish plugin to the [@stedi-oss](https://github.com/stedi-oss) namespace instead of [@stedi](https://github.com/stedi) ([fe0f4c8](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/fe0f4c8ab0686f400bc71ec79aa28b9c49a2fc6b))

# [1.4.0](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.3.1...v1.4.0) (2020-10-30)


### Features

* new rule no-direct-lambda-invoke ([#23](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/issues/23)) ([112c42d](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/112c42d3a6f3c0f4f7a7ecf0f0e909192a7f17b1))

## [1.3.1](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.3.0...v1.3.1) (2020-10-29)


### Bug Fixes

* undefined case in instrument-aws-clients rule ([#21](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/issues/21)) ([fd2591a](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/fd2591ae4c67f72d059a6af3f29e37fac38436e4))

# [1.3.0](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.2.0...v1.3.0) (2020-10-29)


### Features

* extend instrumented-document-clients rule, add tests ([#19](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/issues/19)) ([abb165a](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/abb165a965676a45ba48986d823864abb0d20c38))

# [1.2.0](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.1.2...v1.2.0) (2020-10-22)


### Features

* extend instrumented-aws-clients rule to support more cases ([#16](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/issues/16)) ([0599729](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/0599729ddb0b7bd6c46d7a262432a64af4b4e24a))

## [1.1.2](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.1.1...v1.1.2) (2020-10-09)


### Bug Fixes

* add access=public flag to npm's publishConfig ([b3c15d7](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/b3c15d7cca19f6c362e909a6d4f7552eb004b195))

## [1.1.1](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.1.0...v1.1.1) (2020-10-09)


### Bug Fixes

* point publishConfig to npmjs ([d5aee29](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/d5aee291f6fb21d9ef9492e551bd31df5f3a49c8))
* remove publishConfig.registry from package.json in order to publish to NPM ([49735b0](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/49735b0bdf86112e17302562dcf45d22caa6e268))
* update secret reference ([6f820e0](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/6f820e0ad839780339ec038889f00a8e3bdf9b2d))

# [1.1.0](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/compare/v1.0.0...v1.1.0) (2020-10-08)


### Features

* publish to npmjs ([1c1c611](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/1c1c6111716eb9c7479f32b05ea301b452945d69))

# 1.0.0 (2020-10-03)


### Bug Fixes

* **build:** add .releaserc.json ([074e47d](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/074e47da97f25e232046fa6a5d6bd04ddbf8bdf0))
* **release:** add .npmrc ([bfab475](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/bfab4758f0bb370d84ea4bdb26c2cb86c2ee97c0))
* **release:** copy ENG_GITHUB_TOKEN to GITHUB_TOKEN ([1677469](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/1677469239dc7abf6b594cfdc19fb05c87bcd2bb))
* links to supported rules ([df8ce29](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/df8ce29807ab77bed2ab047f5bd238574e9e9519))
* prefix package name with stedi scope ([ba37b84](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/ba37b8452e3b79e31cc0518dcdde8ef711faa742))
* release action syntax ([0b99cb8](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/0b99cb8006c6125312823c10652fb48a99fbf5ad))


### Features

* add gpr-publish workflow ([e9b5c65](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/e9b5c658ac261821925e195b674cfc75d2e1842d))
* add linting ([c114a69](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/c114a6969fbf2e377675a2b78cb908f5c5cc507b))
* add release action ([55056d7](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/55056d7b5f3f8d5bc98285a84ee9a49ffc5fba99))
* initial commit ([e43c318](https://github.com/Stedi/eslint-plugin-stedi-aws-rules/commit/e43c31836775e60b14666bae95a73670e2879211))
