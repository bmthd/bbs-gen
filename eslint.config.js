import eslint from "@eslint/js";
import tsESLint from "typescript-eslint";
import importAccess from "eslint-plugin-import-access";

export default [
  { ignores: ["dist/**"] },
  eslint.configs.recommended,
  ...tsESLint.configs.recommended,
  {
    plugins: {
      "import-access": { ...importAccess },
    },
  },
  {
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
    files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.mdx"],
    languageOptions: {
      parser: tsESLint.parser,
      parserOptions: {
        project: true,
        sourceType: "module",
      },
    },
  },
];
