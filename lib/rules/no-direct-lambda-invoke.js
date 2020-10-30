/**
 * @fileoverview Do not invoke Lambdas directly
 * @author Marcin Jan Puhacz
 */
"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Do not invoke Lambdas directly",
      category: "Best practices",
      recommended: true,
    },
    messages: {
      directInvocation: "Lambdas should not be invoked directly",
    },
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

    function reportDirectInvocation(node) {
      context.report({
        node,
        messageId: "directInvocation",
      })
    }

    return {
      "VariableDeclarator > NewExpression[callee.property.name='Lambda']": (
        node,
      ) => {
        if (node.parent.id && node.parent.id.name) {
          trackedVariables.add(varInScope(node.parent.id.name))
        }
      },

      "CallExpression[callee.property.type='Identifier'][callee.property.name=/^invoke$|^invokeAsync$/][callee.object.type='Identifier']": (
        node,
      ) => {
        if (isTracked(node.callee.object.name)) reportDirectInvocation(node)
      },

      "CallExpression[callee.property.type='Identifier'][callee.property.name=/^invoke$|^invokeAsync$/] NewExpression[callee.property.name='Lambda']": (
        node,
      ) => {
        reportDirectInvocation(node)
      },

      "CallExpression[callee.property.type='Identifier'][callee.property.name=/^invoke$|^invokeAsync$/] NewExpression[callee.name='Lambda']": (
        node,
      ) => {
        reportDirectInvocation(node)
      },
    }
  },
}
