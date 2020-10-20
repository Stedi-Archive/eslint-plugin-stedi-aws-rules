/**
 * @fileoverview Don't import AWS directly, use clients instead.
 * @author Tyler van Hensbergen
 */
"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",

    docs: {
      description: "Don't import AWS directly, use clients instead.",
      category: "Cold-start optimization",
      recommended: true,
    },

    messages: {
      directImport: "'{{modules}}' imported directly. Use clients instead.",
    },

    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    return {
      ImportDeclaration: (node) => {
        if (node.source.value == "aws-sdk") {
          const modules = node.specifiers.map((o) => o.local.name).join(", ")
          context.report({
            node,
            messageId: "directImport",
            data: { modules },
          })
        }
      },
    }
  },
}
