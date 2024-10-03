import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'react-native$': 'react-native-web', // Alias for React Native,
            "@": path.resolve(__dirname, "../expoapp/app"),
        },
    },
    build: {
        rollupOptions: {
            // Ensure Vite handles all dependencies and shared modules
            external: [], // Empty this unless you're explicitly externalizing packages
        },
    },
});
