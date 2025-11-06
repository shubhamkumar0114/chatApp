import React, { useEffect, useState } from "react";
import { IoReorderThreeOutline, IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchUser from "./SearchUser";

const TopNavBar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const text = location.pathname === "/stories" ? "Storie" : "Chats";

  const sidebarContent = ["Profile", "Setting"];

  const [search , setSearch] = useState(false)
  const handleClickSearch = (e)=> {
    if (e.type === "click") {
      setSearch(true);
    }
  }

  return (
    <div>
      <div className="flex justify-between bg-white items-center mb-0 border border-gray-300 text-gray-800 p-3">
        <div className="flex items-center  gap-x-3">
          {/* ------------------------------ */}
          <div className="flex items-center">
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className=" m-1 text-2xl">
                <IoReorderThreeOutline />
              </div>

              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-300 rounded-box z-50 w-62 top-15 p-2 shadow-sm"
              >
                {sidebarContent?.map((sidebar, index) => (
                  <li key={index}>
                    <Link>{sidebar}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ------------------------------ */}

          <p className="font-semibold text-xl">{text}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <p className="cursor-pointer" onClick={handleClickSearch}>
           {!search?  <IoSearch /> : <SearchUser />}
          </p>
          <p>
            <DropDownMenu />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
