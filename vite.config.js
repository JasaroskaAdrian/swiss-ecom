import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
    root: 'src/frontend/html',
    server: { open: true },
    build: {
        outDir: '../../../dist',
        emptyOutDir: true
    },
    resolve: {
        alias:{
            '/scripts': resolve(__dirname, 'src/frontend/scripts')
        }
    }
})