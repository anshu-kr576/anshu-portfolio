import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/anshu-portfolio/',
   build: {
    outDir: 'docs',   // 👈 ADD ONLY THIS
  },
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";

// export default defineConfig(({ command }) => ({
//   plugins: [react(), tailwindcss()],
//   base: command === "build" ? "/PortFolio/" : "/",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

