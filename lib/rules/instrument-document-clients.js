/**
 * @fileoverview Ensure AWS DynamoDB Document client instances are instrumented.
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
      description:
        "Ensure AWS DynamoDB Document client instances are instrumented.",
      category: "Tracing",
      recommended: true,
    },
    messages: {
      notInstrumented: "Called {{name}} before it was instrumented.",
      instrumentService:
        "DocumentClient should be instrumented using `service` property.",
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    let trackedVariables = new Set()

    /**
     * Returns a variable for the current scope if exists.
     * @param {string} name The node to report.
     * @returns {Variable|undefined}
     */
    function varInScope(name) {
      return context.getScope().set.get(name)
    }

    /**
     * Checks whether a variable is being tracked
     * @param {string} name Variable name
     * @returns {Boolean}
     */
    function isTracked(name) {
      return trackedVariables.has(varInScope(name))
    }

    function reportInstrumentService(node) {
      context.report({
        node,
        messageId: "instrumentService",
      })
    }

    function checkMemberExpression(node) {
      const noProperty = !node.property
      const wrongProperty = node.property && node.property.name !== "service"

      if (noProperty || wrongProperty) {
        reportInstrumentService(node)
      }
    }

    function checkIdentifier(node) {
      if (node.name) {
        reportInstrumentService(node)
      }
    }

    return {
      "VariableDeclarator > NewExpression[callee.property.name='DocumentClient']": (
        node,
      ) => {
        if (node.parent.id && node.parent.id.name) {
          trackedVariables.add(varInScope(node.parent.id.name))
        }
      },

      "CallExpression[callee.property.name='captureAWSClient']:has(NewExpression[callee.property.name='DocumentClient']) .arguments": (
        node,
      ) => {
        checkMemberExpression(node)
      },

      "CallExpression[callee.property.name='captureAWSClient'][arguments.length=1] .arguments[type!='NewExpression']": (
        node,
      ) => {
        const name = node.name || node.object.name
        if (!isTracked(name)) return

        switch (node.type) {
          case "MemberExpression":
            return checkMemberExpression(node)
          case "Identifier":
            return checkIdentifier(node)
        }
      },

      "CallExpression[callee.object.name]": (node) => {
        const name = node.callee.object.name
        if (!isTracked(name)) return

        context.report({
          node,
          messageId: "notInstrumented",
          data: { name: name },
        })
      },
    }
  },
}
