import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="cursor-pointer m-1">
          <BsThreeDotsVertical />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-white mt-6 rounded-box z-1 w-44 p-2 shadow-sm"
        >
          <li className="bg-white">
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <a>Setting</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
