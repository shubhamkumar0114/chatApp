import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AuthUserClick } from "../contextApi/Context";
import { SocketContext } from "../contextApi/Sockets";
const ChatNav = () => {
  const { selectedUser } = useContext(AuthUserClick);
  // const [onlineUsers, setOnlineUsers] = useContext(SocketContext);

  return (
    <div className="p-1 flex justify-between items-center z-50">
      <div className="flex items-center gap-x-2">
        <Link to={"/"} onClick={() => localStorage.removeItem("selectUser")}>
          <FaArrowLeft />
        </Link>
        <div className="flex items-center gap-x-1">
          <img
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            className="w-8 h-8 border rounded-full"
            alt=""
          />
          <div className="flex flex-col gap-0">
            <h2>{selectedUser ? selectedUser?.username : "Username"}</h2>
            <span className="text-[10px]">Active</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Link>
          <FaVideo />
        </Link>
        <Link>
          <FaPhoneAlt />
        </Link>
        <Link>
          {" "}
          <BsThreeDotsVertical />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ChatNav;
