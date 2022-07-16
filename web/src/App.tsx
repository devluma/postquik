import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import { ThemeContext } from "./hooks/theme";
import Routes from "./routes";

const App: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
