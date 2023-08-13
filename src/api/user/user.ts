import request from "../../utils/request";

/**
 * @author tg
 * @date 2023-08-02 15:39:52
 * @description:用户列表
 */

export function http_user_list(params:any) {
  return request({
    url: "/api/get/use",
    method: "post",
    data: params,
  });
}

