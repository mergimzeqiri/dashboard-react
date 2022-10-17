import { useEffect, useState } from "react";
import { Authcontext } from "./Authcontext";

export interface addUser {
  email: string;
  password: string;
}
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    false || JSON.parse(localStorage.auth)
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const addUser = (value: addUser) => {
    setAuth(value);
    setIsAuthenticated(true);
  };

  const context = {
    isAuthenticated: isAuthenticated,
    user: auth,
    addUserFunction: addUser,
    setIsAuthenticated: setIsAuthenticated,
  };
  return (
    <Authcontext.Provider value={context}>{children}</Authcontext.Provider>
  );
};
export default Authcontext;
