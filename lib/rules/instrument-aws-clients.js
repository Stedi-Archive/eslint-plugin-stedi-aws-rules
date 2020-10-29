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
    messages: {
      clientNotInstrumented: "AWS client not instrumented: {{client}}",
    },

    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    const code = context.getSourceCode()
    let awsClients
    let awsClientInstances

    /**
     * Reports an AST node as a rule violation.
     * @param {ASTNode} node The node to report.
     * @param {ASTNode|undefined} data The service client instance to report, defaults to `node`
     * @returns {void}
     */
    function report(node, data) {
      data = data || node
      context.report({
        node,
        messageId: "clientNotInstrumented",
        data: { client: code.getText(data) },
      })
    }

    /**
     * Returns a variable for the current scope if exists.
     * @param {string} name The node to report.
     * @returns {Variable|undefined}
     */
    function varInScope(name) {
      return context.getScope().set.get(name)
    }

    return {
      Program: () => {
        awsClients = new Set()
        awsClientInstances = new Map()
      },

      ImportDeclaration: (node) => {
        if (node.source.value.startsWith("aws-sdk/clients/")) {
          node.specifiers.map((o) => awsClients.add(o.local.name))
        }
      },

      "VariableDeclarator:has(NewExpression)": (node) => {
        const name = node.init.callee.name
        if (name && awsClients.has(name)) {
          const scopeVar = varInScope(node.id.name)
          awsClientInstances.set(scopeVar, node)
        }
      },

      "Program:exit": () => {
        awsClientInstances.forEach((node) => report(node))
      },

      "CallExpression[callee.object]": (node) => {
        const scopeVar = varInScope(node.callee.object.name)
        if (scopeVar && awsClientInstances.has(scopeVar)) {
          report(node, awsClientInstances.get(scopeVar))
          awsClientInstances.delete(scopeVar)
        }
      },

      "CallExpression[callee.property.name='captureAWSClient'][arguments.length=1][arguments.0.type=Identifier]": (
        node,
      ) => {
        const scopeVar = varInScope(node.arguments[0].name)
        if (scopeVar && awsClientInstances.has(scopeVar)) {
          awsClientInstances.delete(scopeVar)
        }
      },
    }
  },
}
