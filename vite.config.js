import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    viteSingleFile()
  ],
  build: {
    rollupOptions: {
      output: {
        // 禁用代码分割，将所有代码打包到一个文件中
        manualChunks: undefined,
        // 内联所有资源到HTML中
        inlineDynamicImports: true
      }
    },
    // 禁用模块预加载
    modulePreload: false,
    // 目标设置为支持较老的浏览器
    target: 'es2015',
    // 将所有资源内联到HTML中
    assetsInlineLimit: 100000000 // 100MB，确保所有资源都被内联
  }
})
