import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    extends: ["js/recommended"],
  },
  // TypeScript configuration
  tseslint.configs.recommended,

  // React configuration
  pluginReact.configs.flat.recommended,

  // React Hooks
  reactHooks.configs["flat/recommended"],
  {
    files: [
      "src/app/**/*.{js,ts,jsx,tsx}",
      "src/pages/**/*.{js,ts,jsx,tsx}",
      "src/components/**/*.{js,ts,jsx,tsx}",
    ],
    rules: {
      // Reglas específicas para App Router
      "@next/next/no-html-link-for-pages": "off",
      "react/react-in-jsx-scope": "off", // Next.js no necesita importar React
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Evita errores con los metadatos del App Router
      "@next/next/no-page-custom-font": "off",
      // Reglas para imports
      "import/no-anonymous-default-export": "warn",
      // Permitir "use client" y "use server" directivas
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
          minimumDescriptionLength: 10,
        },
      ],
    },
  },

  {
    files: ["app/**/page.{js,ts,jsx,tsx}", "app/**/layout.{js,ts,jsx,tsx}"],
    rules: {
      "import/no-default-export": "off",
    },
  },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      "public/**",
    ],
  },
  // tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
]);
