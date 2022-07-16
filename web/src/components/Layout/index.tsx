import React from "react";

import MainHeader from "src/components/MainHeader";
import Aside from "src/components/Aside";
import Content from "src/components/Content";

import * as S from "./styles";

const Layout: React.FC = ({ children }) => (
  <S.Grid>
    <MainHeader />
    <Aside />
    <Content>{children}</Content>
  </S.Grid>
);

export default Layout;
