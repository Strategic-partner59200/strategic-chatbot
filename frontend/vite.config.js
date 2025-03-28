import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
assetsInclude: ['**/*.PNG'],

})





















// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// // Vite configuration for building the website and chatbot widget
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.PNG'],
//   define: {
//     'process.env': {}, // This will define process.env as an empty object, preventing the error
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // Alias for imports
//     },
//   },
//   build: {   
//     lib: {
//       entry: path.resolve(__dirname, 'src/chatbot-widget.jsx'),
//       name: 'ChatbotWidget',
//       fileName: (format) => `chatbot-widget.${format}.js`,
//       formats: ['umd', 'es'], // UMD for global scope, ES for modern imports
//     },
//   },
// })


















// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// // Vite configuration for building the website and chatbot widget
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.PNG'],
//   define: {
//     'process.env': {}, // This will define process.env as an empty object, preventing the error
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // Alias for imports
//     },
//   },
//   build: {
//     rollupOptions: {
//       input: {
//         // Entry point for the website (index.html)
//         main: path.resolve(__dirname, 'index.html'), // Replace with your actual website entry point if different
//         // Entry point for the chatbot widget (chatbot-widget.jsx)
//         chatbotWidget: path.resolve(__dirname, 'src/chatbot-widget.jsx'),
//       },
//       output: {
//         entryFileNames: '[name].js',
//         format: 'esm', // Use ESM for modern imports (you can change this as needed)
//         // Disable inlineDynamicImports to allow multiple entry points
//         inlineDynamicImports: false,
//       },
//     },
//   },
// });























