const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  useBabelRc() // Giúp CRA load file .babelrc
);