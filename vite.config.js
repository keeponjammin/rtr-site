const path = require("path");

export default {
  root: path.resolve(__dirname, "src"), // Make sure this points to the directory containing `index.html`
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bootstrap-icons": path.resolve(
        __dirname,
        "node_modules/bootstrap-icons"
      ),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};