/**
 * @fileoverview Don't import AWS directly, use clients instead.
 * @author Tyler van Hensbergen
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-aws-import"),
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
ruleTester.run("no-aws-import", rule, {
  valid: [
    {
      code: "import { DynamoDB } from 'aws-sdk/clients/dynamodb'",
    },
    {
      code: "const DynamoDB = require('aws-sdk/clients/dynamodb')",
    },
  ],

  invalid: [
    {
      code: 'import { S3 } from "aws-sdk"',
      errors: [{ messageId: "directImport", data: { modules: "S3" } }],
    },
    {
      code: "import { S3, DynamoDB } from 'aws-sdk'",
      errors: [
        { messageId: "directImport", data: { modules: "S3, DynamoDB" } },
      ],
    },
  ],
})
