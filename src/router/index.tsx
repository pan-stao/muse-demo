import { useRoutes, RouteObject } from "react-router-dom";
import constantRoutes from "./constantRoutes";
import asyncRoutes from "./routes";

const allRouter = constantRoutes.concat(asyncRoutes);

const RouterUse = () => {
  return useRoutes(allRouter as RouteObject[]);
};

export default RouterUse;
