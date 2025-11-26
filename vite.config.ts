import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/artfall/", // IMPORTANT for GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
