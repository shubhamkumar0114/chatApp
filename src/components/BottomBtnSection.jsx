import React, { useState } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { GiAbstract021 } from "react-icons/gi";
import { MdOutlineCall } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const BottomBtnSection = () => {
  const [active, setActive] = useState();

  const butns = [
    { id: 1, btnIcon: <BsChatSquareText />, btnName: "Chats", path: "/" },
    { id: 2, btnIcon: <GiAbstract021 />, btnName: "Stories", path: "stories" },
    { id: 3, btnIcon: <SlCalender />, btnName: "Meetings", path: "meetings" },
    { id: 4, btnIcon: <MdOutlineCall />, btnName: "Calls", path: "calls" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center shadow-sm p-2 font-monospace">
        {butns.map((b) => (
          <Link key={b?.id}
          onClick={()=> setActive(b.id)}
            to={b.path}
            className={`${active === b.id? "bg-zinc-300": ""} px-2 py-1 rounded-md flex flex-col justify-center items-center  hover:bg-zinc-300`}
          >
            <p>{b.btnIcon}</p>
            <button className="font-semibold text-sm">{b.btnName}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomBtnSection;
