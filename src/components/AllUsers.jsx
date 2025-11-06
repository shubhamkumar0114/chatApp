import React, { use, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthUserClick } from "../contextApi/Context";
import AddBtn from "./AddBtn";

const AllUsers = () => {
  const { users } = useContext(AuthUserClick);
  const { selectedUser, setSelectedUser } = useContext(AuthUserClick);
  return (
    <div >
      <div className="bg-white">
        <div className="p-3 ">
          <div
            className="flex flex-col gap-y-4"
            style={{
              minHeight: "64vh",
              overflowY: "scroll",
            }}
          >
            {users?.map((user) => (
              <Link
                to={`/chat`}
                key={user?._id}
                onClick={() => setSelectedUser(user)}
                className={`hover:bg-zinc-700 p-1 flex items-center gap-x-3`}
              >
                <div className={`avatar  avatar-offline `}>
                  <div className="w-12 border border-gray-300 opacity-90 rounded-full">
                    <img
                      src={
                        user
                          ? user?.image?.url
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <h3 className=" text-[18px]">{user?.username}</h3>
                    <small className="text-[12px]">{"last msg"}</small>
                  </div>
                  <div className="mr-4">
                    {/* <small className="">
                      just now
                    </small> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* addfriend */}
          <AddBtn />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
