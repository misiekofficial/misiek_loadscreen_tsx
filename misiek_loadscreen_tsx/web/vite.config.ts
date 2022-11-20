import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  //css
  plugins: [
    react({
      // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
      // For example <img src="/images/logo.png"> will not work without the code below
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
  ],
  base: "./",
  build: {
    outDir: "build",
    target: "esnext",
  },

  /**css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/ui.scss" as ui;\n`
      },
    }
  }**/
});
