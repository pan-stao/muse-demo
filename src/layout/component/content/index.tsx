import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import style from './index.module.less'
const {  Content } = Layout;
const ContentView: React.FC = () => {
  return (
    <Content className={style['layout-content']}>
      <Outlet />
    </Content>
  );
};

export default ContentView;