import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { REPO_NAME } from "./utils";

// https://vite.dev/config/
export default defineConfig({
  base: REPO_NAME,
  plugins: [react()],
});
