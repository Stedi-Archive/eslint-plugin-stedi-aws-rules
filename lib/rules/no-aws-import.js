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
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ImportDeclaration: (node) => {
        const source = context.getSourceCode()
        const importLine = source.getText(node)
        if (importLine.match('"aws-sdk"')) {
          context.report({
            node,
            message: importLine,
          })
        }
      },
    }
  },
}
