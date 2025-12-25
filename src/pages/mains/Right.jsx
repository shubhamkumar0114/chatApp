import React, { useContext, useState } from "react";
import ChatNav from "../../components/ChatNav";
import Chat from "../../components/Chat";
import InputSend from "../../components/InputSend";
import { AuthUserClick } from "../../contextApi/Context";
import SelectedUserProfile from "../../components/SelectedUserProfile";
import whatsapp from "../../../public/whatsapps.png";
import { ThemeContext } from "../../contextApi/Theme";
const Right = () => {
  const { selectedUser, setSelectedUser } = useContext(AuthUserClick);
  const { theme, setTheme } = useContext(ThemeContext);
  const [box, setBox] = useState(false);

  const handleProfile = () => {
    setBox(!box);
  };

  return (
    <div
      className={` h-screen md:h-full chat-right-bg  ${
        theme
          ? "bg-zinc-950 border-l border-zinc-700"
          : "bg-white text-white border-l border-gray-300"
      }`}
    >
      {selectedUser ? (
        <>
          <div className={`${box ? "w-[66%]" : "w-[100%]"} rignt-chat-section `}>
            <div>
              <ChatNav handleProfile={handleProfile} />
            </div>
            <div>
              <Chat />
            </div>
            <div className="px-4 py-1">
              <InputSend />
            </div>
          </div>
          <div>
            <SelectedUserProfile selectedUser={selectedUser} box={box} />
          </div>
        </>
      ) : (
        <div className="flex justify-center no-select-conversation items-center ">
          <div className="no-selected-text">
            <img
              src={whatsapp}
              className={` w-[100%] `}
              alt=""
            />
            <p>No Selected Conversation</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;
