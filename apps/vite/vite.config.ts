import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5001,
    headers: {
      "x-app-name": "visitor",
    },
    hmr: {
      host: "listen.localhost",
      protocol: "ws",
      clientPort: 5001, // Specify the client port if it's different from the server port
    },
  },
});
