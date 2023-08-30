// 动画组件值
const transitionStylesLogin = {
    // entering: { transform: "translateX(100px)" },
    entered: { transform: "translateX(0px)" },
    // exiting: { transform: "translateX(-100%)" },
    exited: { transform: "translateX(0px)" },
  };
  
  // const transitionStylesReg = {
  //   // entering: { transform: "translateY(0%)" },
  //   entered: { transform: "translateY(-1000px)" },
  //   // exiting: { transform: "translateY(0px)" },
  //   exited: { transform: "translateY(0px)" },
  // };
  
  // 登录注册类型
  enum LoginTypes {
    LOGIN = "login",
    REGISTRY = "registry",
  }
  
  export { LoginTypes, transitionStylesLogin };