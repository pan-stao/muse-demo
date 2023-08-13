// 引入nodejs 的path模块，path.resolve用来处理绝对路径


const path = require('path')

module.exports = {
    ...
    resolve: {
        extension: [".js", ".jsx"],
        alias: {
          "@": path.join(__dirname, "src"),
          pages: path.join(__dirname, "src/pages"),
          router: path.join(__dirname, "src/router")
        }
      }
}