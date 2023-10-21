import { defineConfig } from "vite"
import cloudflareFunctions from "vite-plugin-cloudflare-functions"
import solidPlugin from "vite-plugin-solid"

// import devtools from 'solid-devtools/vite';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    solidPlugin(),
    cloudflareFunctions({
      wrangler: {
        log: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  test: {
    environment: "node",
  },
})
