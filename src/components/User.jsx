import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SocketContext } from "../contextApi/Sockets.jsx";

const User = ({ user}) => {
 
  const [chat, setChat, online, sockets] = useContext(SocketContext);
  const isOnlie = online.includes(user?._id);

  return (
    <div>
      <div>
        <Link to={"/rightchat"} className={`flexs`}>
          <div className={`avatar ${isOnlie ? "avatar-online" : null} `}>
            <div className="w-12 h-12  rounded-full border border-zinc-600 p-[2px]">
              <img
                className="w-full h-full rounded-full"
                src={
                  user
                    ? user?.image?.url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-0 items-start">
              <h3 className="tracking-wide text-[15px] font-semibold text-[#1a1a1a]">
                {user?.name}
              </h3>
              <small className="">{"msg"}</small>
            </div>
            <div className="text-[0.7rem] text-end">
              <span className="bg-red-500 text-[#f5f5f5] px-2 py-1 rounded-full">
                2
              </span>
              <p>just now</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default User;
