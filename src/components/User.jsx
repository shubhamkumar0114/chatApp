import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SocketContext } from "../contextApi/Sockets.jsx";

const User = ({ user}) => {
 
  const [chat, setChat, online, sockets] = useContext(SocketContext);
  const isOnlie = online.includes(user?._id);

  return (
    <div>
      <div>
        <Link className={`flexs`}>
          <div className={`avatar ${isOnlie ? "avatar-online" : null} `}>
            <div className="w-12  rounded-full">
              <img
                src={
                  user
                    ? user?.image?.url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-0">
              <h3 className="">{user?.name}</h3>
              <small className="">{"msg"}</small>
            </div>
            <div className="text-[0.7rem] ">
              <p>2</p>
              <p>just now</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default User;
