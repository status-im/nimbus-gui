import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tamaguiPlugin } from '@tamagui/vite-plugin';

export default defineConfig({
  plugins: [react(), tamaguiPlugin({
    config: './tamagui.config.ts',
    components: ['tamagui'],
  }),
    // optional, adds the optimizing compiler:
    // tamaguiExtractPlugin(tamaguiConfig),
  ],
  define: {
    DEV: `${process.env.NODE_ENV === 'development' ? true : false}`,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        '.js',
        '.jsx',
        '.json',
        '.ts',
        '.tsx',
        '.mjs',
      ],
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
