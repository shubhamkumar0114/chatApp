import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineChat } from "react-icons/md";
import { MdHistoryToggleOff } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";

const TabSection = () => {
  return (
    <div>
      <div className="bg-white border border-t-gray-400 rounded-md z-50 ">
        <div className="tabs tabs-border  px-4 py-3 flex justify-between text-black">
          <Link to={"/"}>
            <div className="flex flex-col justify-center items-center ">
              <div className="text-[1.4rem] text-gray-600">
                <MdOutlineChat />
              </div>
              <div className="text-black">
                <h1>Chats</h1>
              </div>
            </div>
          </Link>

          <Link to={""}>
            <div className="flex flex-col justify-center items-center">
              <div>
                <MdHistoryToggleOff className="text-[1.4rem] text-gray-900" />
              </div>
              <div className="text-black">
                <h1>Stories</h1>
              </div>
            </div>
          </Link>

          <Link to={""}>
            <div className="flex flex-col justify-center items-center">
              <div>
                <SiGooglemeet className="text-[1.4rem] text-gray-500" />
              </div>
              <div className="text-black">
                <h1>Meeting</h1>
              </div>
            </div>
          </Link>
          <Link to={""}>
            <div className="flex flex-col justify-center items-center ">
              <div>
                <IoCallOutline className="text-[1.4rem] text-gray-800" />
              </div>
              <div className="text-black">
                <h1>Calls</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
