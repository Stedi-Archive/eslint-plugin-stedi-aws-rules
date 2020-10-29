/**
 * @fileoverview Do not invoke Lambdas directly
 * @author Marcin Jan Puhacz
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-direct-lambda-invoke"),
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
ruleTester.run("no-direct-lambda-invoke", rule, {
  valid: [
    "new SomeClass().invoke({})",
    "let obj = new SomeClass(); obj.invoke()",
    "let obj = new SomeClass(); obj.invokeAsync()",
  ],

  invalid: [
    {
      code: "new Lambda().invoke({});",
      errors: [{ messageId: "directInvocation" }],
    },
    {
      code: "new AWS.Lambda().invoke({});",
      errors: [{ messageId: "directInvocation" }],
    },
    {
      code: "let lbd = new AWS.Lambda(); lbd.invoke()",
      errors: [{ messageId: "directInvocation" }],
    },
    {
      code: "let lbd = new AWS.Lambda(); lbd.invokeAsync()",
      errors: [{ messageId: "directInvocation" }],
    },
  ],
})
