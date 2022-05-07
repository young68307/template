// vue
import vue from '@vitejs/plugin-vue'

// 自动导入vue3的hooks, 支持vue, vue-router, vue-i18n, @vueuse/head, @vueuse/core等自动引入
import AutoImport from 'unplugin-auto-import/vite'

// UI组件库按下自动导入 + 自动导入全局设定的组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// lodash函数和antd组件库部分组件的样式按需引入
import vitePluginImp from 'vite-plugin-imp'

// g-zip打包
import viteCompression from 'vite-plugin-compression'

// JSX
import vueJsx from '@vitejs/plugin-vue-jsx'

// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'

// 兼容性
import legacyPlugin from '@vitejs/plugin-legacy'

export default [
  vue(),

  vueJsx({ transformOn: true }),

  AutoImport({
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    imports: ['vue', 'vue-router', { axios: [['default', 'axios']] }, 'pinia'],
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    dts: './auto-import.d.js'
  }),

  Components({
    resolvers: [AntDesignVueResolver({ importLess: true, resolveIcons: true })],
    dirs: ['src/global-components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
  }),

  vitePluginImp({
    libList: [
      // { libName: 'lodash', libDirectory: '', camel2DashComponentName: false },
      {
        libName: 'ant-design-vue',
        style(name) {
          return `ant-design-vue/es/${name}/style/index.js`
        }
      }
    ]
  }),

  viteCompression({ verbose: true, disable: false, threshold: 1024, algorithm: 'gzip', ext: '.gz' }),

  legacyPlugin({
    targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
  }),

  visualizer()
]
