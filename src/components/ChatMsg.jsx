import React, { useContext, useState } from "react";
import { useAuth } from "../contextApi/useAuth";
import dayjs from "dayjs";
import { ThemeContext } from "../contextApi/Theme";
import { handleDelete } from "../Api/api";
import { IoIosArrowDown } from "react-icons/io";
import MsgMenu from "./MsgMenu";

const ChatMsg = ({ msg }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(true);
  const [authUser] = useAuth();
  const isSender = authUser?._id === msg?.senderId;

  const handleDeleteMsg = async (msgId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await handleDelete(msgId, token);
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const handleMsgMenuOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="message">
      <div className={``}>
        {isSender ? (
          <div className="flex items-baseline-last text-right text-white">
            <div
              className={`left  ${
                theme
                  ? "bg-zinc-800 text-white"
                  : "bg-white shadow-zinc-400 shadow text-black"
              } `}
            >
              <div className="flex flex-col-reverse ">
                <div
                  className={` msg cursor-pointer`}
                  onClick={() => handleDeleteMsg(msg?._id)}
                >
                  {msg?.message}
                  {msg?.createdAt && (
                    <div className="msg-time">
                      {dayjs(msg.createdAt).format("h:mm A")}
                    </div>
                  )}
                </div>
                {msg.image?.url && (
                  <div
                    className="w-56"
                    onClick={() => handleDeleteMsg(msg?._id)}
                  >
                    <img
                      className=" w-full h-auto rounded-md"
                      src={msg?.image?.url}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            {/* <div
              className={`hover:opacity-100 cursor-pointer ${
                !open ? "hover:opacity-100" : "opacity-0"
              }`}
              onClick={handleMsgMenuOpen}
            >
              {!open ? <MsgMenu /> : <MsgMenu />}
            </div> */}
          </div>
        ) : (
          <div className="flex items-baseline-last text-right text-white">
            <div
              className={`right ${
                theme
                  ? "bg-zinc-800 text-white"
                  : "bg-zinc-100 shadow-gray-500 shadow text-black"
              }`}
            >
              <div className="flex flex-col-reverse cursor-pointer ">
                <div className="msg " onClick={() => handleDeleteMsg(msg?._id)}>
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
                  <div
                    className="w-56"
                    onClick={() => handleDeleteMsg(msg?._id)}
                  >
                    <img
                      className="w-full h-auto p-2 rounded-md"
                      src={msg?.image?.url}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            {/* <div
              className={`hover:opacity-100 cursor-pointer ${
                !open ? "hover:opacity-100" : "opacity-0"
              }`}
              onClick={handleMsgMenuOpen}
            >
              {!open ? <MsgMenu /> : <MsgMenu />}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMsg;
