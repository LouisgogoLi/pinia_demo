import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_APP_PUBLICPATH,
    define: {
      "process.env": env,
    },
    build: {
      sourcemap: mode === "production" ? false : true,
    },
    plugins: [
      vue(),
      vueI18n({
        // you need to set i18n resource including paths !
        include: resolve(
          dirname(fileURLToPath(import.meta.url)),
          "./path/to/src/locales/**"
        ),
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : [],
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/views/__tests__/global_setup/vitest.init.js"],
    },
  };
});
