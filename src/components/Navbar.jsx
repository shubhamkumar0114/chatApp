import React, { useContext } from 'react'
import { AuthUserClick } from '../contextApi/Context';

import { FaVideo } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
   const {selectedUser} = useContext(AuthUserClick)
  return (
    <div>
      <div className=" p-2 w-[100%]">
        <p className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <div className="avatar avatar-online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
              </div>
            </div>
            <h3 className="text-xl">
              {selectedUser ? selectedUser?.username : "username"}
            </h3>
          </div>

          {/* ------------video call------------ */}
          <div className="flex items-center gap-x-4 mr-2">
            <button className="px-3 py-2 bg-zinc-600 cursor-pointer rounded-md">
              <FaVideo />
            </button>
            <button className="px-3 py-2 bg-zinc-600 cursor-pointer rounded-md">
              <FaPhoneAlt />
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Navbar
