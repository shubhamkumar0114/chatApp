import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const SocketContext = createContext();

const SocketsAuthProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  return (
    <SocketContext.Provider
      value={[chat, setChat]}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketsAuthProvider;
