// 打包 ES 模块所用的配置文件

import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: 'empty',
  build: {
    outDir: 'dist/es',
    lib: {
      // 打包的入口文件
      entry: resolve(__dirname, 'src/bundle.js'),
      name: 'DuyiPlus',
      fileName: 'duyi-plus',
      formats: ['es']
    },
    // vite 内部使用的是 rollup 进行打包
    // rollupOptions 可以书写 rollup 的配置
    rollupOptions: {
      // 下面的这些依赖都是不需要打包到我们的组件库里面的
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'lodash-es'
      ]
    }
  }
})
