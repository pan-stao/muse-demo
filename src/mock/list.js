// 导入 Mock
import Mock from "mockjs";

// 进行数据的模拟操作 [这里的数据,安装接口的文档进行模拟]
let dataList = Mock.mock({
  "userList|20": [
    {
      id: "@increment()",
      name: "@name()",
      title: "@ctitle()",
      content: "@cparagraph(2)",
      time: '@Date("yyyy-MM-dd hh:mm:ss")',
    },
  ],
});

// 封装一个方法: 根据 url 获取 query 参数
// const getQuery = (url, name) => {
//   // 从url地址中的 ? 进行查找
//   const index = url.indexOf("?");
//   // 判断进行字符串的分割
//   if (index !== -1) {
//     const str = url.substr(index + 1).split("&");
//     for (let i = 0; i < str.length; i++) {
//       const itemArr = str[i].split("=");
//       if (itemArr[0] === name) {
//         return itemArr[1];
//       }
//     }
//   }
//   return null;
// };

const getString = (str,name) =>{
  const newStr = str.substr(0).split("&");
  for (let i = 0; i < newStr.length; i++) {
    const itemArr = newStr[i].split("=");
    if (itemArr[0] === name) {
      return itemArr[1];
    }
  }
}

// 定义 get 数据接口,携带参数[pageNum, pageSize]
Mock.mock("http://localhost:3000/api/get/use", "post", (params) => {
 
//   // 获取传递的参数 
  const pageNum = getString(params.body, "pageNum");
  const pageSize = getString(params.body, "pageSize");
  // 截取数据的起始位置
  const start = (pageNum - 1) * pageSize;
  // 截取数据的终点位置
  const end = pageNum * pageSize;
  // 计算总页码
  const totalPage = Math.ceil(dataList.length / pageSize);
  console.log('start',start,'end',end)
  console.log(dataList,"dataList")
  const list = pageNum > totalPage ? [] : dataList?.userList?.slice(start, end);
  return {
    list, 
    total: dataList.length,
  };
});

// 定义添加列表的数据
Mock.mock("http://localhost:3000/api/add/user", "post", (options) => {
  const body = JSON.parse(options.body);
  const userList = []
  userList.push(
    Mock.mock({
      id: "@increment()",
      name: "@name()",
      title: body.title,
      content: body.content,
      time: '@Date("yyyy-MM-dd hh:mm:ss")',
    })
  );
  return {
    status: 200,
    msg: "数据添加ok",
    list: userList,
    total: userList.length,
  };
});

// 定义删除的接口
// Mock.mock("http://localhost:3000/api/del/use", "post", (options) => {
//   const body = JSON.parse(options.body);
//   const index = userList?.findIndex((item) => item.id === body.id);
//   const userList = []
//   userList.splice(index, 1);
//   return {
//     status: 200,
//     msg: "删除数据ok",
//     list: userList,
//     total: userList.length,
//   };
// });
