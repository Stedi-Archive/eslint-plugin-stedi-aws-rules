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

var ruleTester = new RuleTester()
ruleTester.run("instrument-document-clients", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [],
})
