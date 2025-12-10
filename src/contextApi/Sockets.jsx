import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import socket from "../services/Socket";
import { AuthUserClick } from "./Context";
import { handleGetAllMessage } from "../Api/api.js";
import { useAuth } from "./useAuth";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const SocketsAuthProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const { selectedUser } = useContext(AuthUserClick);
  const [authUser] = useAuth();
  const [sockets, setSockets] = useState(null);
  const [online, setOnline] = useState([]);
  const [typing, setIsTyping] = useState();

  // useEffect(() => {
  //   console.log("Online users updated:", online);
  // }, [online]);

  useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-backend-api-r9xu.onrender.com", {
        query: {
          userId: authUser?._id,
        },
      });
      setSockets(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnline(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSockets(null);
      }
    }
  }, [authUser]);

  useEffect(() => {
    const getMessage = async () => {
      const token = localStorage.getItem("token");
      const res = await handleGetAllMessage(token, selectedUser);
      if (res) setChat(res);
    };
    if (selectedUser) getMessage();
  }, [selectedUser]);

  useEffect(() => {
    socket.emit("joinRoom", authUser?._id);

    return () => {
      socket.emit("leaveRoom", authUser?._id);
    };
  }, []);

  // 📡 Connect hone par
  useEffect(() => {
    const onConnect = () => {
      console.log("Connected to server:", socket.id);
    };

    const handleMessage = (data) => {
      setChat((prev) => [...prev, data]);
    };
 
    // 📨 Server se message aane par
    socket.on("connect", onConnect);
    socket.on("message", handleMessage);

    // Cleanup
    return () => {
      socket.off("connect", onConnect);
      socket.off("message", handleMessage);
    };
  }, [setChat]);

 

  return (
    <SocketContext.Provider
      value={[chat, setChat, online, sockets, typing, setIsTyping]}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketsAuthProvider;
