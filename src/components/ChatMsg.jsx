import React, { useContext } from "react";
import { useAuth } from "../contextApi/useAuth";
import dayjs from "dayjs";
import { ThemeContext } from "../contextApi/Theme";

const ChatMsg = ({ msg }) => {
  
  const { theme, setTheme } = useContext(ThemeContext);
  const [authUser] = useAuth(); // You don’t need setAuthUser here
  const isSender = authUser?._id === msg?.senderId;


  return (
    <div className="message">
      <div className={``}>
        {isSender ? (
          <div
            className={`left ${
              theme
                ? "bg-zinc-500 text-white"
                : "bg-zinc-100 shadow-gray-400 shadow text-black"
            } `}
          >
            <div className="flex flex-col-reverse">
              <div className={` msg cursor-pointer`}>
                {msg?.message}
                {msg?.createdAt && (
                  <div className="msg-time">
                    {dayjs(msg.createdAt).format("h:mm A")}
                  </div>
                )}
              </div>
              {msg.image?.url && (
                <img
                  className="w-52 h-auto rounded-md"
                  src={msg?.image?.url}
                  alt=""
                />
              )}
            </div>
          </div>
        ) : (
          <div
            className={`right  ${
              theme
                ? "bg-zinc-500 text-white"
                : "bg-zinc-100 shadow-gray-400 shadow text-black"
            }`}
          >
            <div className="flex flex-col-reverse ">
              <div className="msg">
                {msg?.message}
                {msg?.createdAt && (
                  <div className="">
                    <div className="msg-time">
                      {dayjs(msg.createdAt).format("h:mm A")}
                    </div>
                  </div>
                )}
              </div>
              {msg.image?.url && (
                <img
                  className="w-52 h-auto p-2 rounded-md"
                  src={msg?.image?.url}
                  alt=""
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMsg;
