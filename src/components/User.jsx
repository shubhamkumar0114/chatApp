import React from 'react'
import { Link } from 'react-router-dom';

const User = ({user}) => {
  return (
    <div>
      <div>
        <Link
         
          className={`hover:bg-zinc-200 p-1 flex items-center gap-x-3`}
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
              <small className="text-[12px]">{user?.email}</small>
            </div>
            <div className="mr-4">
              {/* <small className="">
                      just now
                    </small> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default User
