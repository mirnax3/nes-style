module.exports = {
  'no-template-literals-import': {
    meta: {
      messages: {
        noTemplateLiteralsImport: '[NES Style Rule] Do not use template literals on imports'
      }
    },
    create(context) {
      return {
        TemplateLiteral(node) {
          if (node.parent && node.parent.type === 'ImportExpression') {
            context.report({
              node,
              messageId: 'noTemplateLiteralsImport'
            });
          }
        }
      };
    }
  },
  extends: []
};
