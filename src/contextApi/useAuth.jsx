import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [authUser, setAuthUser] = useState(
    user ? JSON.parse(localStorage.getItem("user")) : undefined
  );

  return (
    <UserContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserAuthProvider;

export const useAuth = () => useContext(UserContext);
