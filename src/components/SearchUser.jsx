import React, { useContext, useState } from "react";
import { AuthUserClick } from "../contextApi/Context";

const SearchUser = () => {
  return (
    <div>
      <div className="bg-white rounded-sm">
        <input
          type="text"
          className="h-10 w-[100%] mr-2 pl-2 border rounded-md outline-none border-gray-300"
          placeholder="Search user.."
        />
      </div>
    </div>
  );
};

export default SearchUser;
