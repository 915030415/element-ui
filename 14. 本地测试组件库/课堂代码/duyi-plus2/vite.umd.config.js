// 打包 UMD 模块所有的 vite 配置

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
    outDir: 'dist/umd',
    lib: {
      // 打包的入口文件
      entry: resolve(__dirname, 'src/bundle.js'),
      name: 'DuyiPlus',
      fileName: 'duyi-plus',
      formats: ['umd']
    },
    // vite 内部使用的是 rollup 进行打包
    // rollupOptions 可以书写 rollup 的配置
    rollupOptions: {
      // 下面的这些依赖都是不需要打包到我们的组件库里面的
      external: ['vue'],
      output: {
        exports: 'named',
        // globals 对应的是上面 external 中的依赖
        // 指令了通过什么名字去全局引入这个依赖
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
