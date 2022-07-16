import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthContext } from "src/hooks/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { logged } = React.useContext(AuthContext);
  return <BrowserRouter>{!logged ? <AuthRoutes /> : <AppRoutes />}</BrowserRouter>;
};

export default Routes;
