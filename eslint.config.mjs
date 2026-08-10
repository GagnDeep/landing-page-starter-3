import tsParser from "@typescript-eslint/parser";

const config = [
  {
    ignores: ['.agent/**', '.agents/**', 'scripts/**', 'out/**', 'node_modules/**', '.next/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  }
];

export default config;
