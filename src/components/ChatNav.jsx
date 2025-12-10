import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AuthUserClick } from "../contextApi/Context";
import { SocketContext } from "../contextApi/Sockets";
import { ThemeContext } from "../contextApi/Theme";

const ChatNav = ({ handleProfile }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [chat, setChat, online, sockets, typing, setIsTyping] =
    useContext(SocketContext);
  const { selectedUser } = useContext(AuthUserClick);
  const isOnlie = online.includes(selectedUser?._id);

  return (
    <div
      className={` chat-nav ${
        theme ? "bg-zinc-900 text-gray-100" : "bg-white text-gray-950"
      }`}
    >
      <div className="flex items-center gap-x-6 ">
        <div className="flex items-center gap-x-4 relative">
          <img
            src={selectedUser?.image.url}
            className="w-10 h-10  rounded-full"
            alt=""
          />
          <span
            className={`avatar ${
              isOnlie ? "avatar-online" : null
            } absolute w-16 h-16 top-[32px] left-[-18px]`}
          ></span>
          <div className="flex cursor-pointer flex-col" onClick={handleProfile}>
            <h2 className="text-[1.1rem]">
              {selectedUser ? selectedUser?.name : "Username"}
            </h2>

            <span className="online-status">
              {typing ? "type.." : isOnlie ? "online" : "offline"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-8 ">
        <Link>
          <FaVideo />
        </Link>
        <Link>
          <FaPhoneAlt />
        </Link>
        <Link onClick={handleProfile} className="text-[1.2rem]">
          {" "}
          <BsThreeDotsVertical />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ChatNav;
