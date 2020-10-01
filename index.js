module.exports = {
  rules: {
    "no-aws-import": require("./rules/no-aws-import"),
    "instrument-aws-clients": require("./rules/instrument-aws-clients"),
    "instrument-document-clients": require("./rules/instrument-document-clients"),
  },
  configs: {
    recommended: {
      env: {
        es6: true,
        node: true,
        jest: true,
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      rules: {
        "@stedi/no-aws-import": "error",
        "@stedi/instrument-aws-clients": "error",
        "@stedi/instrument-document-clients": "error",
      },
      ignorePatterns: [
        "commitlint.config.js",
        "babel.config.js",
        ".eslintrc.js",
        "jest.config.js",
        "dist",
        "lib/types",
      ],
    },
  },
}
