const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.default,
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
  rules: {
    ...fabric.default.rules,
    'react/sort-comp': ['warn'],
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': ['warn', 'as-needed'],
    'max-len': ['error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
