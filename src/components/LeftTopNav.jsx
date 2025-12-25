import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const LeftTopNav = () => {
  return (
    <div>
      <div className="flex justify-between  items-center bg-transparent rounded-sm">
        <h1 className="font-semibold text-[1.2rem] text-red-500 tracking-wide">Whatsapps</h1>
        <Link to={""} className="font-medium text-[1.4rem]">
          <CgProfile />
        </Link>
      </div>
    </div>
  );
};

export default LeftTopNav;
