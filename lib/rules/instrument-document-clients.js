/**
 * @fileoverview Ensure AWS DynamoDB Document client instances are instrumented.
 * @author Tyler van Hensbergen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        "Ensure AWS DynamoDB Document client instances are instrumented.",
      category: "Fill me in",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    var trackedVariables = [];
    function varInScope(x) {
      return context.getScope().set.get(x);
    }
    return {
      "NewExpression[callee.property.name = 'DocumentClient']": (node) => {
        const parent = context.getAncestors().reverse()[0];
        if (parent.type !== "VariableDeclarator") {
          context.report({
            node,
            message:
              "DocumentClient should be instantiated and instrumented before being used",
          });
        }
      },
      "VariableDeclarator:has(NewExpression[callee.property.name='DocumentClient'])": (
        node
      ) => {
        if (node.id.name) {
          trackedVariables.push(varInScope(node.id.name));
        }
      },
      "CallExpression[callee.property.name='captureAWSClient'][arguments.length=1] MemberExpression.arguments *.object Identifier[name]": (
        node
      ) => {
        const instrumented = varInScope(node.name);
        trackedVariables = trackedVariables.filter((v) => v !== instrumented);
      },
      "CallExpression[callee.object.name]": (node) => {
        const v = varInScope(node.callee.object.name);
        if (trackedVariables.includes(v)) {
          context.report({
            node,
            message: `Called ${v.name} before it was instrumented`,
          });
        }
      },
    };
  },
};
