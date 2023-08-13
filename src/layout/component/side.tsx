import React from "react";

import { Menu } from "antd";
import { useNavigate } from 'react-router-dom';
// import type { MenuProps } from 'antd';
import * as Icons from "@ant-design/icons";
import SvgIcon from '../../components/svgIcon'

import asyncRoutes from "../../router/routes";

import style from "./index.module.less";

const SideMenu: React.FC = () => {



  const navigate = useNavigate();

   //菜单点击
   const clickMenu = (props: any) => {
    navigate(props.key);
  };

  // 动态渲染 Icon 图标
  const customIcons: { [key: string]: any } = Icons;
  const handleIcon = (name: string) => {
    if (name) {
      name = name.replace(/\s*/g, "");
      if (customIcons[name]) {
        return React.createElement(customIcons[name]);
      } else {
        return <SvgIcon width={20} height={20} iconClass={name} />;
      }
    } else {
      return <></>;
    }
  };

  //设置menu
  const handleMenu = (data: any ) => 
    data.map((item: any) => {
      if (item.children) {
        if (item.children.length > 1) {
          return (
            <Menu.SubMenu
              title={`${item.meta?.title}`}
              key={item.path}
              icon={handleIcon(item.meta.icon)}
            >
                {handleMenu(item.children)}
            </Menu.SubMenu>
          );
        }else{
            const childrenItem = item.children[0];
          if (!childrenItem.hidden) {
            return (
              <Menu.Item key={childrenItem.path} icon={handleIcon(childrenItem.meta.icon)}>
                {(`${childrenItem?.meta?.title}`)}
              </Menu.Item>
            );
          } else {
            return <></>;
          }
        }
      }else {
        if (!item.hidden) {
          return (
            <Menu.Item icon={handleIcon(item.meta.icon)} key={item.path}>
              {(`${item?.meta?.title}`)}
            </Menu.Item>
          );
        } else {
          return <></>;
        }
      }
    });
  ;

  return (
    <section className={style.menu}>
    <Menu
      mode="inline"
      theme={undefined}
      triggerSubMenuAction="click"
      onClick={clickMenu}
     
    >
      {handleMenu(asyncRoutes)}
    </Menu>
  </section>
  );
};

export default SideMenu;
