import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://afrejad.github.io",
  base: "/litoral",
  outDir: "./docs",
  vite: {
    plugins: [tailwindcss()],
  },
});