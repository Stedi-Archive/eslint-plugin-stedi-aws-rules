/**
 * @fileoverview  Always instrument DynamoDB.DocumentClient code with X-Ray
 * @author Tyler van Hensbergen
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/instrument-document-clients"),
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
ruleTester.run("instrument-document-clients", rule, {
  valid: [
    "const dynamoClient = new DynamoDB.DocumentClient()\n" +
      "let ddb = AWSXRay.captureAWSClient(dynamoClient.service)\n" +
      "ddb.scan()",
    "let ddb = AWSXRay.captureAWSClient((new DynamoDB.DocumentClient()).service)\n" +
      "ddb.scan()",
  ],

  invalid: [
    {
      code:
        "const dynamoClient = new DynamoDB.DocumentClient()\n" +
        "let ddb = AWSXRay.captureAWSClient(dynamoClient.wrong)\n" +
        "ddb.scan()",
      errors: [{ messageId: "instrumentService" }],
    },
    {
      code:
        "const dynamoClient = new DynamoDB.DocumentClient()\n" +
        "let ddb = AWSXRay.captureAWSClient(dynamoClient)\n" +
        "ddb.scan()",
      errors: [{ messageId: "instrumentService" }],
    },
    {
      code: "const ddb = new DynamoDB.DocumentClient(); ddb.scan()",
      errors: [{ messageId: "notInstrumented", data: { name: "ddb" } }],
    },
    {
      code:
        "const ddb = AWSXRay.captureAWSClient(new DynamoDB.DocumentClient()); ddb.scan()",
      errors: [{ messageId: "instrumentService" }],
    },
  ],
})
