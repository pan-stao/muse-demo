import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import HeaderView from "./component/header";
import SideMenu from "./component/side";
import ContentView from "./component/content";

import { IDEState } from "@/redux/rootReducer";
import { InitialState, actions } from "@/redux/modules/user/userRedux";

const { Sider } = Layout;

const mapStateToProps = (state: IDEState): InitialState => {
  return {
    ...state.userReducer,
  };
};

interface Props {
  userInfo: any;
}

const mapDispatchToProps = { ...actions };
const HomeLayout: React.FC<Props> = ({ userInfo }) => {
  return (
    <>
      <HeaderView userInfo={userInfo} />
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
        <ContentView />
      </Layout>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);