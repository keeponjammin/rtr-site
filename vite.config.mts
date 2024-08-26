import path from "path";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";

export default {
  plugins: [
    vue(),
    copy({
      targets: [
        {
          src: "src/assets/**/*", // Use a glob pattern to match all files in the assets directory
          dest: "dist/assets", // Destination directory
        },
      ],
      hook: "writeBundle", // Ensure the copy happens after the bundle is written
    }),
  ],
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: path.resolve(__dirname, "dist"), // Ensure the path is correctly resolved
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