module.exports = {
  env: {
    browser: true,
    jquery: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      extends: "eslint:recommended",
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
      },
    ],
    "no-console": ["off"],
  },
};
