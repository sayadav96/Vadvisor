import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // First, set your parser and parserOptions
  {
    files: ["**/*.js", "**/*.jsx"], // apply to JS/JSX files
    languageOptions: {
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false, // no separate babel config needed
        babelOptions: {
          presets: ["next/babel"], // use Next.js preset
        },
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  // Then extend Next.js recommended rules
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
