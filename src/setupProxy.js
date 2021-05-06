const { createProxyMiddleware } = require('http-proxy-middleware')
// console.log(createProxyMiddleware);
module.exports = function(app) {
    app.use('/api', 
    createProxyMiddleware(
            { 
                target: 'http://localhost:3030',
                changeOrigin: true,
                   pathRewrite: {
                       "^/api": ""	// 如果是/api开头的请求全部跳至target对应的地址
                   } 
            }
    ))
}