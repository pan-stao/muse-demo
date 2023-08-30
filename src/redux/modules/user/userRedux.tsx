import {
  ActionType,
  AsyncTuple,
  composeTypes,
  createAction,
} from "iron-redux";

// import { ThunkAction } from "redux-thunk";
// import { http_user_login } from "@/api/user/user";
// import { createAxiosAction } from "../../defined";

// 基础类型
enum BasicTypes {
  changeId,
  handleUserInfo,
}

//！请求类型
enum FetchTypes {
  loadData,
}

const prefix = "user/";
const Types = composeTypes({
  prefix,
  BasicTypes,
  FetchTypes,
});

const actions = {
  changeId: createAction(Types.changeId)<string>(),
  //设置
  handleUserInfo: createAction(Types.handleUserInfo,'userInfo')<any>()
  //!登录
 

};

class InitialState {
  id = '';
  userInfo = null;
}

function reducer(
  state = new InitialState(),
  action: ActionType<typeof actions>
): InitialState {
  switch (action.type) {
    case Types.changeId: {
      const id = action.payload;
      return {
        ...state,
        id,
      };
    }
    // case Types.handleUserInfo: {
    //   const info = action.payload;
    //   return {
    //     ...state,
    //     userInfo:info,
    //   };
    // }

    default: {
      return AsyncTuple.handleAll(prefix, state, action);
    }
  }
}

export { actions, reducer, InitialState };
