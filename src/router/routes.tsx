import { baseRouter } from "../interface/router";
import { lazyLoad } from "./lazyLoad";
import HomeLayout from "../layout";

const asyncRoutes: baseRouter[] = [
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "/home",
        element: lazyLoad(() => import("../pages/home")),
        meta: {
          title: "首页",
          icon: "BankOutlined",
        },
      },
    ],
  },
  {
    path: "/systemManagement",
    element: <HomeLayout />,
    meta: {
      title: "系统管理",
      icon: "BankOutlined",
    },
    children: [
      {
        path: '/systemManagement/userlist',
        element: lazyLoad(() => import('../pages/systemManagement/userList')),
        meta: {
          title: '用户管理',
          icon: 'UsergroupDeleteOutlined'
        }
      },
      {
        path: '/systemManagement/role',
        element: lazyLoad(() => import('../pages/systemManagement/role')),
        meta: {
          title: '角色管理',
          icon: 'UsergroupDeleteOutlined'
        }
      },
    ],
  },
  {
    path: "/leetcode",
    element: <HomeLayout />,
    meta: {
      title: "算法",
      icon: "BankOutlined",
    },
    children: [
      {
        path: '/leetcode/tx',
        element: lazyLoad(() => import('../pages/systemManagement/userList')),
        meta: {
          title: '贪心',
          icon: 'UsergroupDeleteOutlined'
        }
      },
      
    ],
  },
];

export default asyncRoutes;
