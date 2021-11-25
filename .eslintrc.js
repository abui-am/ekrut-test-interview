module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      classes: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'material-ui', 'import'],
  rules: {
    semi: ['error', 'always'],
    'react/prop-types': [1, { ignore: ['children', 'className', 'style'] }],
    'react/react-in-jsx-scope': [0],
    'import/no-unresolved': [2, { caseSensitive: true }],
    'import/named': 0,
    'import/default': 1
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      flowVersion: '0.53' // Flow version
    },
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],

    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};
