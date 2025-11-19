import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import-x";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.recommended,
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      eslintPluginPrettierRecommended,
      ...tailwind.configs['flat/recommended'],
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
    ],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,

      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'import': importPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'off',
      // Reglas de import para detectar errores
      'import/no-unresolved': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-duplicates': 'error',
    },
    settings:{
      "react": {
        "version": "detect",
      },
      "tailwindcss": {
        "callees": ["cn", "cva"],
      },
      "import-x/resolver": {
        "typescript": {
          "alwaysTryTypes": true,
          "project": "./tsconfig.json",
        },
        "node": true
      }
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores:['**/*.{d.ts,spec.ts,spec.tsx}'],
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
);
