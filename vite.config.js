import { defineConfig } from 'vite'

import AliasConfig from './vite-config/alias-config'

import BuildConfig from './vite-config/build-config'

import ProxyConfig from './vite-config/proxy-config'

import PluginsConfig from './vite-config/plugins-config'

export default defineConfig({
  // 根路径配置
  base: '/',

  // 插件配置
  plugins: [...PluginsConfig],

  //目录配置
  resolve: { alias: AliasConfig },

  // 服务配置
  server: {
    open: true,
    port: 9528,
    proxy: ProxyConfig
  },

  // build配置
  build: { ...BuildConfig },

  css: {
    preprocessorOptions: {
      //less预处理主题
      less: {
        modifyVars: {},
        // additionalData: `@import "${path.resolve(__dirname, 'src/global-styles/global-less-value.less')}";`,
        javascriptEnabled: true
      }
    }
  }
})
