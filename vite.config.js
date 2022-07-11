import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV !== 'dev' ? './' : '/',
    build: {
        outDir: 'app/build',
    },
    plugins: [vue()],
});
