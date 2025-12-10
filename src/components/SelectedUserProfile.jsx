import React, { useContext } from "react";
import { ThemeContext } from "../contextApi/Theme";

const SelectedUserProfile = ({ selectedUser, box }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`w-[24vw] ${box ? "block" : "hidden"} z-50  h-[100%] ${
          theme
            ? "bg-zinc-900 text-gray-200 border-l border-l-zinc-500"
            : "bg-white border-l border-l-zinc-500"
        } absolute flex flex-col overflow-hidden  profile-move `}
      >
        <div className="text-center ">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-4 font-semibold text-[1.1rem]">
              <span>X</span>
              <p className="">Contact info</p>
            </div>
            {/* --------edit-section----------- */}
            <div>
              <button>edit</button>
              {/* <div className={`${edit ? "block" : "hidden"}`}>
                  <EditProfile/>
                </div> */}
            </div>
          </div>

          <div className="flex flex-col content-center items-center w-[22vw] selected-user-pro">
            <div className="w-[120px] h-[120px] rounded-full">
              <img
                src={selectedUser?.image.url}
                className="w-[100%] h-[100%] rounded-full selected-user-img"
                alt=""
              />
            </div>
          </div>

          <div className="selected-user-content">
            <h2 className="text-[1.2rem] font-semibold">
              {selectedUser?.name}
            </h2>
            <h2 className="text-[1rem] font-semibold">
              {selectedUser?.phone || "94XXXXXX76"}
            </h2>
          </div>
        </div>
        {/* ---------about---------- */}
        <div className="selected-user-content">
          <h1 className="font-semibold ">About</h1>
          <p className="font-semibold">Busy</p>
        </div>

        <hr className="border border-zinc-400" />
      </div>
    </>
  );
};

export default SelectedUserProfile;
