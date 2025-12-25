import React, { useContext, useEffect, useRef } from "react";
import ChatMsg from "./ChatMsg";
import { SocketContext } from "../contextApi/Sockets";
import NotChat from "./NotChat";

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
      return () => clearTimeout(timer);
    };
    chatScroll();
  }, [chat]);

  return (
    <div className={`flex flex-col h-[80vh] md:h-[70vh] py-1  md:px-10  bg-amber-100`}>
      {chat.length !== 0 ? (
        <div
          ref={lastMsgRef}
          className="px-2 scroll-smooth  pt-2 h-[80vh] md:h-[70vh] overflow-scroll"
          
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
