import React, { use, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthUserClick } from "../contextApi/Context";
import AddBtn from "./AddBtn";
import SearchUser from "./SearchUser";
import RightChat from "./RightChat";
import User from "./User";

const AllUsers = () => {
  const { users } = useContext(AuthUserClick);
  const { selectedUser, setSelectedUser } = useContext(AuthUserClick);
  return (
    <div>
      <div className="bg-white  flex gap-4 p-0">
        <div className=" w-full ">
          <div className="p-3 space-y-2">
            <div>
              <SearchUser />
            </div>
            <div
              className="flex flex-col shadow-sm gap-y-4"
              style={{
                minHeight: "72vh",
                overflowY: "scroll",
              }}
            >
              {users?.map((user) => (
                <div onClick={()=> setSelectedUser(user)}>
                  <User user={user} />
                </div>
              ))}
            </div>
            {/* addfriend */}
            <div className="md:hidden block">
              <AddBtn />
            </div>
            <div>// logout button</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
