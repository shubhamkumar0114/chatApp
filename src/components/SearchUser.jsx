import React, {useContext } from "react";
import {AuthUserClick} from "../contextApi/Context"

const SearchUser = ({ setSearch }) => {
  return (
    <div>
      <div className="bg-transparent rounded-sm w-full searchUser">
        <input
          type="text"
          // value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
          className="serach-input placeholder:text-gray-700"
          placeholder="Search user.."
        />
      </div>
    </div>
  );
};

export default SearchUser;
