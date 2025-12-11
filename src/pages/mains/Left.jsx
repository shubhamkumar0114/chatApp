import React, { useState, lazy, useContext } from "react";
import AllUsers from "../../components/AllUsers";
import { useAuth } from "../../contextApi/useAuth";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { MdHistoryToggleOff } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { ThemeContext } from "../../contextApi/Theme";

const Profile = lazy(() => import("../../components/Profile"));
const Setting = lazy(() => import("../../components/Setting"));
const Call = lazy(() => import("../../components/Call"));
const Stories = lazy(() => import("../../components/Stories"));

const Left = () => {
  const [authUser] = useAuth();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("Home");
  const { theme, setTheme } = useContext(ThemeContext);

  const components = {
    Home: <AllUsers />,
    Profile: <Profile />,
    Setting: <Setting setPage={setPage} />,
    Call: <Call />,
    Stories: <Stories />,
  };

  const handleProfile = () => {
    setOpen(!open);
  };

  return (
    <div
      className={` h-screen flex gap-3  ${
        theme ? "bg-zinc-950 text-white" : "bg-white text-gray-950"
      }`}
    >
      <div className=" flex flex-col border-r-gray-600 border-r justify-between items-center gap-12 pb-8 px-2">
        <div className=" flex flex-col justify-start gap-6 mt-4">
          <div className=" w-6 h-6">
            <MdOutlineChat
              className="w-[100%] h-[100%] cursor-pointer"
              onClick={() => setPage("Home")}
            />
          </div>
          <div className="w-6 h-6">
            <MdHistoryToggleOff
              className="w-[100%] h-[100%] cursor-pointer"
              onClick={() => setPage("Stories")}
            />
          </div>
          <div className="w-6 h-6">
            <IoCallOutline
              className="w-[100%] h-[100%] cursor-pointer"
              onClick={() => setPage("Call")}
            />
          </div>
        </div>
        <div className=" flex flex-col items-center gap-6">
          <div className="w-6 h-6">
            <IoSettingsOutline
              className="w-[100%] h-[100%] cursor-pointer"
              onClick={() => setPage("Setting")}
            />
          </div>
          <div
            className={`${
              theme ? "" : "border"
            }  w-10 overflow-hidden h-10 rounded-full`}
            onClick={handleProfile}
          >
            <img
              className=" w-[100%] h-[100%] cursor-pointer"
              onClick={() => setPage("Profile")}
              src={authUser?.image?.url}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* *********************USERS LIST SECTION LEFT*********************** */}
      {components[page] || (
        <div>
          <AllUsers />
        </div>
      )}
    </div>
  );
};

export default Left;
