import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    mode === "development" && lovableTaggerPlugin(),
  ].filter(Boolean) as never,
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
}));

// Dynamically include lovable-tagger only in dev to keep prod build clean.
function lovableTaggerPlugin() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { componentTagger } = require("lovable-tagger");
    return componentTagger();
  } catch {
    return null;
  }
}
