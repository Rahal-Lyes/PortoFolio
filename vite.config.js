import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vuetify from 'vite-plugin-vuetify'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  base: "/PortoFolio/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Alias pour 'src'
    },
  },
});
