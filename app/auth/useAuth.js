import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { token, setToken } = useContext(AuthContext);

  const logIn = (authToken) => {
    // const token = jwtDecode(authToken);
    // console.log(user);
    setToken(authToken);
    // console.log(authToken);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setToken(null);
    authStorage.removeToken();
  };

  return { token, logIn, logOut };
};
