const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index"]),
  createPages("./src/pages/articles.html", "./pages/articles.html", ["index"]),
  createPages("./src/pages/tests.html", "./pages/tests.html", ["index"]),
  createPages("./src/pages/dictionary.html", "./pages/dictionary.html", [
    "index",
  ]),
  createPages(
    "./src/pages/articles/plants.html",
    "./pages/articles/plants.html",
    ["index"]
  ),
  createPages("./src/pages/tests/test1.html", "./pages/tests/test1.html", [
    "index",
  ]),
  createPages("./src/pages/theory.html", "./pages/theory.html", ["theory"]),
];

module.exports = htmlPages;
