const Path = require("path");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "dist"),
    iife : false,
  },
  mode: "none",
};
