import React, { useContext } from "react";
import { AuthUserClick } from "../contextApi/Context";
// import logo from "../assets/logo.png"

const Stories = () => {
  const { users } = useContext(AuthUserClick);

  return (
    <div className="bg-white h-100">
      <div>{/* <TopNavBar headingName={"Stories"} /> */}</div>

      <div className="p-3">
        <div className="flex items-start flex-wrap gap-4">
          <div className="w-16 overflow-hidden rounded-full h-28 border border-gray-800 opacity-60">
            <input type="file" className="w-12 h-12 bg-gray-500 rounded-full" />
            <h4>Story+</h4>
          </div>
          {users?.map((storie) => (
            <div className="">
              <div className="w-16 overflow-hidden rounded-full h-16 border border-gray-800 opacity-60">
                <img src={storie?.image?.url} alt="" />
              </div>
              <div className="text-center text-[12px]">{storie.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
