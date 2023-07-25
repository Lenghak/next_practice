/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: false,
  singleAttributePerLine: true,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  parser: "typescript",
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  importOrder: [
    "^@/scss/(.*)$",
    "^react(.*)$",
    "^next/(.*)$",
    "@^/layouts/(.*)$",
    "^@/components/(.*)$",
    "^lucide-react/(.*)$",
    "^@/lib/(.*)$",
    "^@/server/(.*)$",
    "^@trpc/(.*)$",
    "^zod",
    "^[./]",
    "^@/types/(.*)$",
    "<THIRD_PARTY_MODULES>",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: "*.scss",
      options: { parser: "scss" },
    },
    {
      files: "*.json",
      options: { parser: "json" },
    },
  ],
};
