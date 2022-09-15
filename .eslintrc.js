'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:ember/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'ember/no-classic-classes': 'off',
    'ember/no-classic-components': 'off',

    // this needs to be off because things like import and export statements are
    // "unsupported", even though we're transpiling them first.
    'node/no-unsupported-features/es-syntax': 'off',

    // Type overloads cause false positives. typescript errors on duplicates, so
    // this doesn't need to be replaced.
    'no-dupe-class-members': 'off',

    // typescript handles this direclty, and the eslint rule doesn't understand
    // how to resolve type-only imports when there is only a d.ts file and not a
    // .js file.
    'node/no-missing-import': 'off',

    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/naming-convention': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/triple-slash-reference': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
  },
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './index.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/**/*.js',
        './script/**/*.js',
        './tests/dummy/config/**/*.js',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
};
