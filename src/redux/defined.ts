import axios from "axios";

export enum Method {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

const createAxiosAction =
  (type: string, url: string, method = Method.Get) =>
  () =>
  (dispatch: any) => {
    const promise: any =
      method === Method.Get
        ? axios.get(url)
        : method === Method.Post
        ? axios.post(url)
        : method === Method.Put
        ? axios.put(url)
        : axios.delete(url);

    promise.then((res: { data: any }) => dispatch({ type, payload: res.data }));
  };

export {createAxiosAction};
