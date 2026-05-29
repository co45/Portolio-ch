import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Replace REPOSITORY_NAME with your actual GitHub repository name before deploying.
  base: "/Portolio-ch/",
});
