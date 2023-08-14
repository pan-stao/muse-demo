import React from "react";

import { useMount } from "ahooks";

// import { http_user_list } from "../../../api/user/user";

const userList: React.FC = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks 
 useMount(() => {
    // getUserList();
  });



  // const getUserList = async () => {
  //   // localStorage.setItem("token", "123");

  //   const res = await http_user_list({pageNum:1,pageSize:10});

  //   console.log('res',res)
  // };

  return <div>userList</div>;
};

export default userList;
