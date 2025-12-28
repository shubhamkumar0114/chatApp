import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SocketContext } from "../contextApi/Sockets.jsx";

const User = ({ user}) => {

  const [chat, setChat, online, sockets] = useContext(SocketContext);
  const isOnlie = online.includes(user?._id);

  return (
    <div>
      <div className="">
        <Link to={`/rightchat`} className={`flexs`}>
          <div className={`avatar ${isOnlie ? "avatar-online" : null} `}>
            <div className="w-15 h-15  rounded-full border bg-black border-black p-[2px]">
              <img
                className="w-full h-full  bg-center bg-cover rounded-full"
                src={
                  user
                    ? user?.image?.url
                    : user?.name[0]
                }
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-0 items-start">
              <h3 className="tracking-wide text-[18px] font-semibold text-[#1a1a1ad0]">
                {user?.name}
              </h3>
              <small className="">{"msg"}</small>
            </div>
            <div className="text-[0.7rem] text-end">
              <span className="bg-red-500 text-[#f5f5f5] px-2 py-1 rounded-full">
                2
              </span>
              <p className="text-[1rem]">just now</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default User;
