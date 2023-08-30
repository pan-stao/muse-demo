import React from "react";
import { Avatar } from "antd";
import style from "./index.module.less";

interface Props {
  userInfo: any;
}

const HeaderView: React.FC<Props> = ({ userInfo }) => {
  console.log(userInfo);
  return <div className={style["layout-header"]}>
    <section>11</section>
    <section>22</section>
    <section>33</section>
    <section>44</section>
    <section> <Avatar
    src={userInfo?.avatar}
    size={{ lg: 64,}}
    alt={userInfo.username}
  /></section>
   
    </div>;
};

export default HeaderView;