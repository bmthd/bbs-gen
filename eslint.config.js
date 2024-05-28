import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import importAccess from "eslint-plugin-import-access";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import tsESLint from "typescript-eslint";

const compat = new FlatCompat();

/** @type {import('eslint').Linter.FlatConfig} */
const eslintRecommended = {
  ...eslint.configs.recommended,
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.commonjs,
      ...globals.es2020,
    },
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
};

/** @type {import('eslint').Linter.FlatConfig} */
const react = {
  files: ["**/*.{js,jsx,ts,tsx}"],
  rules: {
    ...reactRecommended.rules,
    ...reactJSXRuntime.rules,
  },
  languageOptions: {
    ...reactRecommended.languageOptions,
    ...reactJSXRuntime.languageOptions,
  },
  plugins: {
    react: reactPlugin,
    // @ts-expect-error todo: fix this
    "jsx-a11y": jsxA11yPlugin,
    // @ts-expect-error todo: fix this
    "react-hooks": reactHooksPlugin,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

export default tsESLint.config(
  eslintRecommended,
  { ignores: ["dist/**", "coverage"] },
  eslint.configs.recommended,
  ...tsESLint.configs.recommended,
  {
    plugins: {
      // @ts-expect-error todo: fix this
      "import-access": { ...importAccess },
    },
    rules: {
      "import-access/jsdoc": [
        "error",
        {
          defaultImportability: "package",
        },
      ],
    },
  },
  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  react,
);
