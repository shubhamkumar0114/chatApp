import React, { useContext, useState } from "react";
import { AuthUserClick } from "../contextApi/Context";

import SearchUser from "./SearchUser";
import User from "./User";
import LeftTopNav from "./LeftTopNav";
import { ThemeContext } from "../contextApi/Theme";
import { Link } from "react-router-dom";
import TabSection from "./TabSection";

const AllUsers = () => {
  const [search, setSearch] = useState("");

  const { users } = useContext(AuthUserClick);
  const { selectedUser, setSelectedUser } = useContext(AuthUserClick);
  const { theme, setTheme } = useContext(ThemeContext);


  const filterUser = users?.filter(
    (user) =>
      user?.name && user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`${
        theme ? "bg-transparent text-gray-100" : "bg-white text-black"
      } `}
    >
      <div className={` w-full`}>
        <div className=" w-full ">
          <div>
            <LeftTopNav />
            <div>
              <SearchUser setSearch={setSearch} />
            </div>
            <h1 className="px-2 tracking-wide font-semibold">Chats</h1>
            <div className=" flex h-[63vh] overflow-y-scroll flex-col w-[100%] gap-2 px-1 py-2 ">
              {filterUser?.map((user) => (
                <Link
                  to={""}
                  key={user?._id}
                  className={`${
                    selectedUser?._id === user._id ? "selected-user" : ""
                  } users`}
                  onClick={() => setSelectedUser(user)}
                >
                  <User user={user} />
                </Link>
              ))}
            </div>
            <div className="md:hidden block fixed bottom-0 left-0 right-0">
              <TabSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
