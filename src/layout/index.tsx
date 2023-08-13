import React from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderView from "./component/header";
import SideMenu from "./component/side";

const { Sider, Content } = Layout;

const HomeLayout: React.FC = () => {
  return (
    <>
      <HeaderView />

      <Layout
        style={{
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Sider trigger={null} collapsible collapsed={undefined} width={210}>
          <SideMenu />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};

export default HomeLayout;
