import React from "react";

import { ThemeContext } from "src/hooks/theme";

import * as S from "./styles";

const Toggle: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [checkTheme, setCheckTheme] = React.useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleTheme = () => {
    setCheckTheme(!checkTheme);
    toggleTheme();
  };

  return (
    <S.Container>
      <span>Light</span>
      <S.ToogleSelector
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checkTheme}
        onChange={handleTheme}
      />
      <span>Dark</span>
    </S.Container>
  );
};

export default Toggle;
