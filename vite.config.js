import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tamaguiPlugin } from "@tamagui/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: "./src/tamagui.config.js",
      components: ["tamagui"],
    }),
  ],
  define: {
    "process.env.TAMAGUI_TARGET": JSON.stringify("web"),
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
  optimizeDeps: {
    resolveExtensions: [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ".js",
      ".jsx",
      ".json",
      ".ts",
      ".tsx",
      ".mjs",
    ],
    loader: {
      ".js": "jsx",
    },
  },
});
