export default {
  cssCodeSplit: true,
  sourcemap: false,
  brotliSize: false,
  minify: 'terser',
  terserOptions: {
    compress: {
      keep_infinity: true,
      drop_console: true, //打包时删除console
      drop_debugger: true //打包时删除 debugger
    }
  },
  rollupOptions: {
    output: {
      // chunkFileNames: 'static/js/[name]-[hash].js',
      // entryFileNames: 'static/js/[name]-[hash].js',
      // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',

      manualChunks(id, { getModuleInfo, getModuleIds }) {
        if (id.includes('node_modules')) {
          if (id.toString().split('node_modules/')[1].split('/')[0].includes('ant-design-vue')) {
            return 'ant-design-vue'
          }
        }
        // lodash: ['lodash']
      }
    }
  }
}
