import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Form, Input, Button } from "antd";
import Animation from "@/components/animation";
// import { CSSTransition } from "react-transition-group";
import { transitionStylesLogin, LoginTypes } from "./defined";
import { http_user_login } from "@/api/user/user";

import style from "./login.module.less";
import { IDEState } from "@/redux/rootReducer";
import { InitialState, actions } from "@/redux/modules/user/userRedux";

const mapStateToProps = (state: IDEState): InitialState => {
  return {
    ...state.userReducer,
  };
};

const mapDispatchToProps = { ...actions };
interface Props {
  id?: string;
  userInfo: any;
  loadLogin?: (params: any) => void;
  changeId:(res:string)=>{}
  handleUserInfo:any;
}
const LoginView: React.FC<Props> = (props: Props) => {
  const {  handleUserInfo,changeId } = props;
  const [isShown, setIsShown] = useState<boolean>(false);
  const [urlPathName, setUrlPathName] = useState<string>("");

  const navigate = useNavigate();

  const [form] = Form.useForm();

  // 获取地址信息
  useEffect(() => {
    const pathName = window.location?.pathname?.substring(1);
    setUrlPathName(pathName);
    // setLoginFlag(pathName)
  }, [urlPathName, isShown]);

  // 设置默认页面
  useEffect(() => {
    isLoginUrl() ? navigate("/registry") : navigate("/login");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShown]);

  //判断当前是不是登录页面
  const isLoginUrl = () => {
    return urlPathName === LoginTypes.LOGIN;
  };

  // 登录注册跳转
  const toggleShow = () => {
    setIsShown(!isShown);
    isLoginUrl() ? navigate("/registry") : navigate("/login");
  };
  const onFinish = async (values: any) => {
    try {
      await form.validateFields();
      const params = values;
      const res = await http_user_login(params);
      handleUserInfo(res?.userInfo)
      changeId(res?.userId)
      if (res.status === 1) {
        // const { token, userInfo } = res.data;
        // const { phone, nickname, avatarUrl, roleType } = userInfo;
        // // setToken(token);
        // localStorage.setItem('phone', phone);
        // localStorage.setItem('nickname', nickname);
        // localStorage.setItem('avatar', avatarUrl);
        // localStorage.setItem('roleType', roleType);
        navigate("/home");
      }
    } catch {}
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const changeBtn = () => {
    return <div onClick={toggleShow} className={style["login-change-btn"]} />;
  };

  const renderRegAndLogin = () => {
    return (
      <Form
        className={style["login-view-form"]}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelAlign="right"
        form={form}
      >
        {changeBtn()}
        <Form.Item>{isLoginUrl() ? "登录" : "注册"}</Form.Item>
        <Form.Item
          label="username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        {isLoginUrl() || (
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        )}
        {isLoginUrl() || (
          <Form.Item
            label="phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>
        )}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Row className={style["login-view"]}>
      <Col span={12} className={style["login-view-left"]}>
        <Button type="primary" onClick={toggleShow}>
          确定
        </Button>
        {/* <CSSTransition
          in={isShown}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className={style['box']}>Hello, World!</div>
        </CSSTransition> */}
      </Col>
      <Col span={12} className={style["login-view-right"]}>
        <Animation
          in={isShown}
          children={renderRegAndLogin()}
          transitionStyles={
            // isLoginUrl() ? transitionStylesLogin : transitionStylesReg
            transitionStylesLogin
          }
        />
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
