import React from "react";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../../hooks/auth";

const Exit: React.FC = () => {
  const { sigout } = React.useContext(AuthContext);
  return (
    <>
      {sigout()}
      <Redirect to="/" />
    </>
  );
};

export default Exit;
