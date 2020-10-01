/**
 * @fileoverview Don&#39;t import AWS directly, use clients instead.
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

var ruleTester = new RuleTester()
ruleTester.run("no-aws-import", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "import { S3 } from 'aws-sdk';",
      errors: [
        {
          message: "Fill me in.",
          type: "Me too",
        },
      ],
    },
  ],
})
