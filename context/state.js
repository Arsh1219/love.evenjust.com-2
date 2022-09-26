import { createContext, useContext, useState, useEffect } from "react";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

const UserContext = createContext();

export function UserWrapper({ children }) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [secretKey, setSecretKey] = useState("");
  // const [, setUserId] = useState("");

  useEffect(() => {
    const userName = getCookie("userName");
    setUserId(getCookie("userId"));
    setSecretKey(getCookie("secretKey"));
    setUserName(userName ? userName : "");
  }, []);

  const logout = () => {
    deleteCookie("userId");
    deleteCookie("userName");
    deleteCookie("secretKey");
    setUserId(undefined);
    setUserName("");
    setSecretKey("");
  };

  const saveUserId = (id) => {
    setCookie("userId", id, {
      expires: new Date(new Date().getTime() + 30000000000),
    });
    setUserId(id);
  };

  const saveUserName = (name) => {
    setCookie("userName", name, {
      expires: new Date(new Date().getTime() + 30000000000),
    });
    setUserName(name);
  };

  const saveSecretKey = (key) => {
    setCookie("secretKey", key, {
      expires: new Date(new Date().getTime() + 30000000000),
    });
    setSecretKey(key);
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        logout,
        userName,
        setUserName,
        secretKey,
        saveSecretKey,
        saveUserName,
        saveUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
