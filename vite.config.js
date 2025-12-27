import { defineConfig } from "vite";
import vituum from "vituum";
import posthtml from "@vituum/vite-plugin-posthtml";

export default defineConfig({
  plugins: [vituum(), posthtml({ root: "src" })],
  server: { open: true, port: 5173 },
  build: { outDir: "dist", emptyOutDir: true },
});
