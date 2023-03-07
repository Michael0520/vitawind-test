import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";
const basePath = "/dim-website/";
const injectOptions = {
  ejsOptions: {
    views: ["./partials"],
  },
};

export default defineConfig({
  appType: "mpa",
  base: basePath,
  minify: true,
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        about: "about.html",
        indoor: "indoor.html",
        outdoor: "outdoor.html",
        indoorDetail: "indoorDetail.html",
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          // entry: "src/main.js",
          filename: "home",
          template: "index.html",
          injectOptions,
        },
        {
          // entry: "src/main.js",
          filename: "about",
          template: "about.html",
          injectOptions,
        },
        {
          // entry: "src/main.js",
          filename: "indoor",
          template: "indoor.html",
          injectOptions,
        },
        {
          // entry: "src/main.js",
          filename: "outdoor",
          template: "outdoor.html",
          injectOptions,
        },
        {
          // entry: "src/main.js",
          filename: "indoorDetail",
          template: "indoorDetail.html",
          injectOptions,
        },
        {
          // entry: "src/main.js",
          filename: "outdoorDetail",
          template: "outdoorDetail.html",
          injectOptions,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@css": path.resolve(__dirname, "src/assets/styles"),
      "@partials": path.resolve(__dirname, "partials"),
      "@script": path.resolve(__dirname, "src/assets/script"),
    },
  },
  server: {
    port: 8080,
    host: "0.0.0.0",
    open: basePath + "index.html",
  },
});
