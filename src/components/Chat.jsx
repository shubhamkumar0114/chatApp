import React, { useContext, useEffect, useRef } from "react";
import ChatNav from "./ChatNav";
import InputSend from "./InputSend";
import { AuthUserClick } from "../contextApi/Context";
import ChatMsg from "./ChatMsg";
import socket from "../services/Socket";
import { SocketContext } from "../contextApi/Sockets";
import NotChat from "./NotChat";
import { handleGetAllMessage } from "../Api/api";

const Chat = () => {
  const { selectedUser } = useContext(AuthUserClick);
  const [chat, setChat] = useContext(SocketContext);
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

  useEffect(() => {
    const getMessage = async () => {
      const token = localStorage.getItem("token");
      const res = await handleGetAllMessage(token, selectedUser);
      if (res) setChat(res);
    };
    if(selectedUser) getMessage();
  }, [selectedUser, setChat]);

  const lastMsgRef = useRef();

  useEffect(() => {
    const chatScroll = () => {
      setTimeout(() => {
        if (lastMsgRef.current) {
          lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer); // ✅ cleanup timer
    };
    chatScroll();
  }, [chat]);
  return (
    <div className=" h-[80vh]">
     
      {chat.length !== 0 ? (
        <div
          ref={lastMsgRef}
          className="px-2 scroll-smooth  mt-1"
          style={{ maxHeight: "80vh", overflowY: "scroll" }}
        >
          {chat?.map((msg, index) => (
            <div
              key={index}
              ref={index === chat.length - 1 ? lastMsgRef : null}
            >
              <ChatMsg msg={msg} />
            </div>
          ))}
        </div>
      ) : (
        <div className=" pt-30 flex justify-center">
          <NotChat />
        </div>
      )}
    
    </div>
  );
};

export default Chat;
