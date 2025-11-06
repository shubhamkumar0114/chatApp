import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../contextApi/useAuth";
import { toast } from "react-toastify";
import { FaPen } from "react-icons/fa";
import { handleLogoutUser } from "../Api/api";

const Profile = () => {
  const [authUser] = useAuth();

  return (
    <div className="h-screen bg-white">
      <div className="px-4 py-2">
        <div className="flex items-center gap-5">
          <Link to={"/"}>
            <FaArrowLeft className="text-gray-800" />
          </Link>
          <h1 className="text-[16px] text-gray-800">Profile</h1>
        </div>
      </div>

      <div className="flex  m-2">
        <div className="bg-white w-full  p-4 pl-4 rounded-md flex flex-col justify-start items-start gap-2">
          <div className="avatar ">
            <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
              <Link>
                <img
                  src={`${
                    authUser
                      ? authUser?.image?.url
                      : " https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }`}
                />
              </Link>
            </div>
          </div>
          <div className="ml-4 text-gray-800">
            <Link
              to={"/editprofile"}
              className="flex  px-1 rounded-md items-center gap-x-2"
            >
              edit{" "}
              <span className="text-sm">
                <FaPen />
              </span>
            </Link>
          </div>
          <div className="flex flex-col w-full mt-4 rounded-md gap-4 border border-gray-300 p-2">
            <h2 className="text-gray-800">Name: {authUser?.name}</h2>
            <h3 className="text-gray-800">Username: {authUser?.username}</h3>
            <p className="text-gray-800">Email: {authUser?.email}</p>
            <p className="text-gray-800">Mobile No:</p>
          </div>
        </div>
      </div>

      <div className="px-2 mt-12">
        <Link
          to={"/login"}
          onClick={handleLogoutUser}
          className="px-3 py-1 bg-red-400 text-white font-semibold"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Profile;
