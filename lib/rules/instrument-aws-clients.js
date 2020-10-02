/**
 * @fileoverview Ensure AWS services clients instances are instrumented.
 * @author Tyler van Hensbergen
 */
"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Ensure AWS services clients instances are instrumented.",
      category: "Tracing",
      recommended: true,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    const code = context.getSourceCode()
    var awsVars
    var safe = false

    return {
      Program: () => {
        awsVars = []
      },
      ImportDeclaration: (node) => {
        if (node.source.value.startsWith("aws-sdk/clients/")) {
          awsVars.push(node.specifiers[0].local.name)
        }
      },
      "CallExpression[callee.property.name='captureAWSClient'][arguments.length=1]": () => {
        safe = true
      },
      "CallExpression[callee.property.name='captureAWSClient'][arguments.length=1]:exit": () => {
        safe = false
      },
      "NewExpression:has(Identifier)": (node) => {
        const name = node.callee.name
        if (name && awsVars.includes(name) && !safe) {
          context.report({
            node,
            message: `AWS client not instrumented: ${code.getText(node)}`,
          })
        }
      },
    }
  },
}
