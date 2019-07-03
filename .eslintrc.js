module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3
      }
    ],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true
      }
    ],
    'react/no-did-update-set-state': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': [0, { ignore: 'ignore', customValidators: 'customValidator' }],
    'react/react-in-jsx-scope': 'error',
    'linebreak-style': 0,
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        semi: false
      }
    ]
  },
  plugins: ['prettier']
}
