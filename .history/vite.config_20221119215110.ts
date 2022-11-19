import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 适配低 版本浏览器的插件
// import legacy from '@vitejs/plugin-legacy'
// 导入mock文件
import { viteMockServe } from 'vite-plugin-mock'

import autoprefixer from 'autoprefixer'

// cdn 加速
// import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import importToCDN from 'vite-plugin-cdn-import'

// element-puls 按需导入的插件
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 导入 压缩代码的的插件
import viteCompression from 'vite-plugin-compression'

// // 图片打包插件
// import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置基础路径
  base: './',
  // 配置插件
  plugins: [
    vue(),
    // 压缩代码的插件使用
    viteCompression(),
    // element-puls 的按需导入的插件
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // }),
    viteMockServe({
      // default
      mockPath: 'mock',
    }),
    // cdn 加速配置
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://unpkg.com/vue@next',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus',
        },
      ],
    }),
    // // 兼容 ie11
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
    // 图片打包配置
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 20,
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 4,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'removeViewBox',
    //       },
    //       {
    //         name: 'removeEmptyAttrs',
    //         active: false,
    //       },
    //     ],
    //   },
    // }),
  ],
  css: {
    // 配置 postcss
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            '> 1%',
          ],
          grid: true,
        }),
        require('postcss-flexbugs-fixes'),
      ],
    },
  },
  resolve: {
    // 为文件路径取别名
    alias: {
      // comp: src 下的 components 路径别名
      '@/': '/src/',
      comp: resolve(__dirname, 'src/components'),
      '/imgs': '/src/assets',
    },
  },
  // 生产环境配置
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生成输出时 去除所有console.log
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      // 打包输出的文件按后缀名分类配置
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
  // 热更新配置
  server: {
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
