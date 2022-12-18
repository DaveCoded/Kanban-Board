import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@theme': path.resolve(__dirname, './src/theme.css.ts'),
            '@globalCSS': path.resolve(__dirname, './src/globalStyles.css.ts'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@icons': path.resolve(__dirname, './src/icons')
        }
    }
});
