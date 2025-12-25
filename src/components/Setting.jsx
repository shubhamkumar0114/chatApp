import React, { useContext, useState } from "react";
import { ThemeContext } from "../contextApi/Theme";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdVpnKey } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { useAuth } from "../contextApi/useAuth";
import { Link } from "react-router-dom";

const Setting = ({ setPage }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [authUser] = useAuth();
  const [search, setSearch] = useState("");

  const handleToggle = () => {
    setTheme(!theme);
  };

  const setting = [
    {
      name: "Account",
      icon: <MdVpnKey />,
      sub: "Security notifications account info",
    },
    { name: "Privacy", icon: <IoMdLock />, sub: "Blocked contects" },
    {
      name: "Chats",
      icon: <BsFillChatSquareTextFill />,
      sub: "Theme, wallpape, chat settings",
    },
    {
      name: "Notifications",
      icon: <MdNotifications />,
      sub: "Message notifications",
    },
  ];

  const filterList = setting?.filter((data) =>
    data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div
      className={`${
        theme ? "bg-zinc-900 text-gray-100" : "bg-white text-black"
      } cursor-pointer flex flex-col gap-6 `}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-[1.1rem] tracking-wide font-semibold">Setting</h1>
        <div>
          {!theme ? (
            <h2 onClick={handleToggle} className="text-[1.5rem]">
              <MdDarkMode />
            </h2>
          ) : (
            <h2 onClick={handleToggle} className="text-[1.5rem]">
              <CiLight />
            </h2>
          )}
        </div>
      </div>

      {/* ********************SEARCH SETTING************************* */}
      <div className="w-full shadow shadow-amber-400  rounded-3xl pl-4">
        <input
          type="text"
          className="h-10 w-full outline-none border-none placeholder:text-gray-600"
          placeholder="Search setting"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ********************PROFILE************************* */}
      <div className="top-setting">
        <div onClick={()=> setPage("Profile")} className="flex items-center gap-4 px-2 py-2">
          <div className="w-15 h-15 rounded-full overflow-hidden bg-center ">
            <img className="w-full h-full" src={authUser?.image?.url} alt="" />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[1.1rem]">{authUser?.name}</h1>
            <p className="text-sm text-gray-500">{"Urgent call only"}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filterList?.map((data, index) => (
          <div key={index} className="hover:bg-gray-200 rounded-md px-2">
            <div className="flex items-center gap-4 py-2">
              <div className="w-8 rounded-full overflow-hidden bg-center ">
                <p className="text-2xl text-gray-500">{data?.icon}</p>
              </div>
              <div className="flex flex-col ">
                <h1 className="text-[1.1rem]">{data?.name}</h1>
                <p className="text-sm text-gray-500">{data?.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Setting;
