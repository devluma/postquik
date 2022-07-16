import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeGlobalProvider } from "./hooks/theme";
import { AuthProvider } from "./hooks/auth";

ReactDOM.render(
  <React.StrictMode>
    <ThemeGlobalProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeGlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
