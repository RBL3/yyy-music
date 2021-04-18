const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = override(
    // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    // 配置路径别名
    addWebpackAlias({
      '@': resolve("src")
    }),
    addLessLoader({
      javascriptEnabled: true,
      strictMath: false, // 关闭严格
      noIeCompat: true
    })
)
