import React, { useContext, useEffect, useRef } from "react";
import ChatMsg from "./ChatMsg";
import { SocketContext } from "../contextApi/Sockets";
import NotChat from "./NotChat";
import imgChatBg from "../../public/chatwatsapp.jpg"

const Chat = () => {
  const [chat] = useContext(SocketContext);

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
    <div className={`h-[100%] conversation`} >
      {chat.length !== 0 ? (
        <div
          ref={lastMsgRef}
          className="px-2 scroll-smooth  pt-2"
          style={{ height: "78vh", overflowY: "scroll" }}
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
        <div className="no-conversation">
          <NotChat />
        </div>
      )}
    </div>
  );
};

export default Chat;
