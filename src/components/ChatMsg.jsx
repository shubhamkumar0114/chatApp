import React from "react";
import { useAuth } from "../contextApi/useAuth";
import dayjs from "dayjs";

const ChatMsg = ({ msg }) => {
  const [authUser] = useAuth(); // You don’t need setAuthUser here

  const isSender = authUser?._id === msg?.senderId;
  const alignment = isSender ? "chat-end" : "chat-start";
  const bubbleColor = isSender
    ? "bg-blue-200 text-black"
    : "bg-gray-300 text-black";

  return (
    <div className="px-2 z-0">
      <div className={`chat ${alignment}`}>
        <div className={`chat-bubble ${bubbleColor} h-8 pb-7 mt-2`}>
          {msg?.message}

          {msg?.createdAt && (
            <div className="text-[11px] opacity-70 mt-1 text-end">
              {dayjs(msg.createdAt).format("h:mm A")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMsg;
