import React, { useState, useEffect } from "react";
import { Col, Row, Form, Input, Button } from "antd";
// import { CSSTransition } from "react-transition-group";
import Animation from "@/components/animation";

import style from "./login.module.less";

enum LoginTypes {
  LOGIN = "LOGIN",
  REGISTRY = "REGISTRY",
}

const LoginView: React.FC = () => {
  const [loginFlag, setLoginFlag] = useState(LoginTypes.LOGIN);
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    console.log(loginFlag);
  }, [loginFlag]);
  const toggleShow = () => {
    setIsShown(!isShown);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setLoginFlag(LoginTypes.REGISTRY);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const renderDiv = () => {
    return <div className={style["box"]}>Hello, World!</div>;
  };

  return (
    // <section className={style['login-view']}>
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
        <Animation in={isShown} children={renderDiv()} />
      </Col>
      <Col span={12} className={style["login-view-right"]}>
        <Form
          className={style["login-view-form"]}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item>
            {loginFlag === LoginTypes.LOGIN ? "登录" : "注册"}
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={toggleShow} htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    // </section>
  );
};

export default LoginView;
