import prettierConfig from 'eslint-config-prettier';
import htmlPlugin from 'eslint-plugin-html';
import prettierPlugin from 'eslint-plugin-prettier';

import babelParser from '@babel/eslint-parser';
import cssPlugin from '@eslint/css';
import js from '@eslint/js';

export default [
  {
    ...js.configs.recommended,
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env'],
        },
      },
      globals: {
        window: true,
        document: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      semi: ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      html: htmlPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
    },
    rules: {},
  },
  {
    files: ['**/*.css'],
    plugins: {
      css: cssPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
    },
    rules: {
      ...cssPlugin.configs.recommended.rules,
    },
  },
  prettierConfig,
  {
    ignores: ['assets/css/**/*.css', 'assets/css/**/dist/**'],
  },
];
