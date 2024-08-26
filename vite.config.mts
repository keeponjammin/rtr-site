import path from 'path';
import vue from '@vitejs/plugin-vue'; // Import the Vue plugin

export default {
  plugins: [vue()], // Add the Vue plugin to the plugins array
  root: path.resolve(__dirname, "src"), // Make sure this points to the directory containing `index.html`
  build: {
    outDir: "../dist",
    assetsDir: "assets",
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