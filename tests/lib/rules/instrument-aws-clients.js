/**
 * @fileoverview Always instrument AWS SDK code with X-Ray
 * @author Tyler van Hensbergen
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/instrument-aws-clients"),
  RuleTester = require("eslint").RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
})

ruleTester.run("instrument-aws-clients", rule, {
  valid: [
    "import SecretsManager from 'aws-sdk/clients/secretsmanager'\n" +
      "const ssm = new SecretsManager()\n" +
      "AWSXRay.captureAWSClient(ssm)",

    "import { SecretsManager, DynamoDB } from 'aws-sdk/clients/secretsmanager'\n" +
      "let ddb = new DynamoDB()\n" +
      "AWSXRay.captureAWSClient(ddb)\n" +
      "AWSXRay.captureAWSClient(new SecretsManager())",
  ],

  invalid: [
    {
      code:
        "import SecretsManager from 'aws-sdk/clients/secretsmanager'\n" +
        "var ssm = new SecretsManager()\n" +
        "function test() {\n" +
        "  const ssm = new SecretsManager()\n" +
        "  AWSXRay.captureAWSClient(ssm)\n" +
        "}\n" +
        "ssm.cancelRotateSecret()",
      errors: [
        {
          messageId: "clientNotInstrumented",
          data: { client: "ssm = new SecretsManager()" },
        },
      ],
    },

    {
      code:
        "import SecretsManager from 'aws-sdk/clients/secretsmanager'\n" +
        "const ssm = new SecretsManager()\n" +
        "ssm.cancelRotateSecret()\n" +
        "AWSXRay.captureAWSClient(ssm)",
      errors: [
        {
          messageId: "clientNotInstrumented",
          data: { client: "ssm = new SecretsManager()" },
        },
      ],
    },
  ],
})
