module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "no-empty-source": null,
  },
  ignoreFiles: ["dist/**", "node_modules/**"],
};
