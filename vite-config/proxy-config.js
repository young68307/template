export default {
  '/testApi': {
    target: 'http://110.42.155.202:3000/host/api/lcdp/',
    changeOrigin: true,
    rewrite: path => path.replace(/^\/testApi/, '')
  },

  '/zhuanfa_hasMimo/': {
    target: 'http://10.168.1.11:31500/',
    changeOrigin: true,
    ws: true
  },

  '/zhuanfa_noMimo/': {
    target: 'http://10.168.1.11:31500/',
    changeOrigin: true,
    ws: true
  }
}
