import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/frontend/views',
    server: { open: true },
    build: {
        outDir: '../../../dist',
        emptyOutDir: true
    },
})