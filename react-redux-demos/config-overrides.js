/*
yarn add react-app-rewired customize-cra -D
*/
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  })
);
