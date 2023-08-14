//引入依赖
const proxy = require("http-proxy-middleware");
//添加代理
module.exports = function (app) {
  //"/api"是你接口地址的首个分发地址
  app.use(
    "/api",
    proxy({ target: "http://127.0.0.1:3000", changeOrigin: true })
  );
  app.use(
    "/user",
    proxy({
      target: "https://127.0.0.1:3000", //目标地址
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/user": "/user",
      },
    })
  );
};
