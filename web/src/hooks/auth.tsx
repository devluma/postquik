import React from "react";

import api from "src/services/api";

type AuthContextProps = {
  logged: boolean;
  sigin(email: string, pass: string): void;
  sigout: () => void;
};

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = React.useState(() => {
    const isLogged = localStorage.getItem("@reactposts:login");
    return !!isLogged;
  });

  const sigin = async (email: string, pass: string): Promise<void> => {
    // const user = await api.get("/auth").catch(err => Promise.reject(err));

    // console.log(user.data);

    console.log(process.env);

    if (email === process.env.USER_EMAIL_TEST && pass === process.env.USER_PASSWORD_TEST) {
      localStorage.setItem("@reactposts:login", "true");
      localStorage.setItem("@reactposts:username", "Admin");
      setLogged(true);
    } else {
      alert("Usuário não encontrado");
    }
  };

  const sigout = () => {
    localStorage.removeItem("@reactposts:login");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, sigin, sigout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
