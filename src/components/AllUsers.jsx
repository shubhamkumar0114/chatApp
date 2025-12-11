import React, { useContext, useState } from "react";
import { AuthUserClick } from "../contextApi/Context";

import SearchUser from "./SearchUser";
import User from "./User";
import LeftTopNav from "./LeftTopNav";
import { ThemeContext } from "../contextApi/Theme";

const AllUsers = () => {
  const [search, setSearch] = useState("");

  const { users } = useContext(AuthUserClick);
  const { selectedUser, setSelectedUser } = useContext(AuthUserClick);
  const { theme, setTheme } = useContext(ThemeContext);
  // const [chat] = useContext(SocketContext);

  const filterUser = users?.filter(
    (user) =>
      user?.name && user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`${
        theme ? "bg-transparent text-gray-100" : "bg-white text-gray-950"
      } `}
    >
      <div className={` w-[100%]  px-4`}>
        <div className=" w-full ">
          <div>
            <LeftTopNav />
            <div>
              <SearchUser setSearch={setSearch} />
            </div>
            <h1 className="px-4">Chats</h1>
            <div
              className=" flex flex-col w-[28vw] gap-4 px-2 py-4"
              style={{
                height: "72vh",
                overflowY: "scroll",
              }}
            >
              {filterUser?.map((user) => (
                <div
                  key={user?._id}
                  className={`${
                    selectedUser?._id === user._id ? "selected-user" : ""
                  } users`}
                  onClick={() => setSelectedUser(user)}
                >
                  <User user={user} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
