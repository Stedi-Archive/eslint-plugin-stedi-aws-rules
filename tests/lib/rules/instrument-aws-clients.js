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

var ruleTester = new RuleTester()
ruleTester.run("instrument-aws-clients", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [],
})
