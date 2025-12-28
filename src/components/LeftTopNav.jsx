import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Profile from "./Profile";
import { handleLogoutUser } from "../Api/api";
const LeftTopNav = () => {
  return (
    <div>
      <div className="flex justify-between mb-3 md:mb-0  items-center bg-transparent rounded-sm">
        <h1 className="font-semibold text-[1.6rem] pl-2 text-red-500 tracking-wide">
          Whatsapps
        </h1>
        <Link to={""} className="font-medium text-[1.4rem]">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">
              <CgProfile className="text-[1.8rem]" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content border border-emerald-300 menu bg-white rounded-box z-1 w-52 p-2 "
            >
              <li className="hover:bg-fuchsia-100 bg-transparent text-[1.1rem] tracking-wide ">
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li className="hover:bg-fuchsia-100 text-[1.1rem]">
                <a onClick={() => handleLogoutUser()}>Logout</a>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftTopNav;
