import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const MsgMenu = () => {
  return (
    <div className=''>
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className=" m-1">
          <IoIosArrowDown/>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 mt-10 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    
    </div>
  );
}

export default MsgMenu
