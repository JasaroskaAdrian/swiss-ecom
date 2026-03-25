import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  root: "src/frontend",

  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/frontend/src"),
      // If you prefer @ to point to src/frontend/src (common pattern), use:
      // "@": path.resolve(__dirname, "src/frontend/src"),
    },
  },

  server: {
    port: 3000,
    proxy: {
      // you had 'http' which will break; put the real backend URL:
      "/api": "http://localhost:8080",
    },
  },

  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
})
