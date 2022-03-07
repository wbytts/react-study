const { createProxyMiddleware } = require('http-proxy-middleware') // create-react-app脚手架自带了

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      // 遇见 /api 前缀的请求，就会触发该代理配置
      target: 'http://127.0.0.1:8181', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的响应头中Host字段的值（标识着本次请求是从哪发出的）
      pathRewrite: { '^/api': '' }, // 重写请求路径
    }),
    // proxy('/api2', {
    //   target: 'http://xxxxxxx:xxxx',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api2': '' },
    // })
  );
};
