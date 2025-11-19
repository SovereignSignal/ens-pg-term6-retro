import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import jsxLocPlugin from "@builder.io/vite-plugin-jsx-loc";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ens-pg-term6-retro/' : '/',
  plugins: [react(), jsxLocPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@db": path.resolve(__dirname, "./db"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
}));
