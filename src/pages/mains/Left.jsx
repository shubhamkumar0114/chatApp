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
      className={` h-[100%]  left-sidebar ${
        theme ? "bg-zinc-900" : "bg-white text-gray-950"
      }`}
    >
      <div className="sidebar">
        <div className="sub-sidebar ">
          <div className="setting-icon-section">
            <MdOutlineChat
              className="setting-icon"
              onClick={() => setPage("Home")}
            />
          </div>
          <div className="setting-icon-section">
            <MdHistoryToggleOff
              className="setting-icon"
              onClick={() => setPage("Stories")}
            />
          </div>
          <div className="setting-icon-section">
            <IoCallOutline
              className="setting-icon"
              onClick={() => setPage("Call")}
            />
          </div>
        </div>
        <div className="setting">
          <div className="setting-icon-section">
            <IoSettingsOutline
              className="setting-icon"
              onClick={() => setPage("Setting")}
            />
          </div>
          <div
            className={`${theme ? "" : "border"} side-pro-icon `}
            onClick={handleProfile}
          >
            <img
              className="img"
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
