import { createApp } from 'vue'
import App from './App.vue'

// vuerouter
import router from 'global-router'

// pinia(替代vuex)
import { createPinia } from 'pinia'

// 样式初始化
import './global-styles/normalize.css'

createApp(App).use(router).use(createPinia()).mount('#app')
