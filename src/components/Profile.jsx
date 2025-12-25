import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contextApi/useAuth";
import { toast } from "react-toastify";
import { FaPen } from "react-icons/fa";
import { handleLogoutUser, handleUpdateUser } from "../Api/api";
import { TiTick } from "react-icons/ti";
import { ThemeContext } from "../contextApi/Theme";
import { FaCamera } from "react-icons/fa";
const Profile = () => {
  const [authUser] = useAuth();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [nameEdit, setNameEdit] = useState(false);
  const [usernameEdit, setUsernameEdit] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (image) handleSubmitUpdate();
  }, [image]);

  const handleOnEditName = () => {
    setNameEdit(!nameEdit);
  };

  const handleOnEditUsername = () => {
    setUsernameEdit(!usernameEdit);
  };

  useEffect(() => {
    setName(authUser?.name);
    setUsername(authUser?.username);
  }, []);

  const handleSubmitUpdate = () => {
    const formData = new FormData();
    if (name) {
      formData.append("name", name || "");
    }
    if (username) {
      formData.append("username", username || "");
    }
    if (image) {
      formData.append("image", image || "");
    }

    try {
      const updateUsers = async () => {
        const res = await handleUpdateUser(authUser, formData);
        localStorage.setItem("user", JSON.stringify(res?.data?.userUpdate));
        toast.success(res?.data?.msg);
      };
      updateUsers();
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div
      // style={{ height: "100%", width: "100%", overflowY: "scroll" }}
      className={`${theme ? "bg-zinc-900" : "bg-white text-gray-950"}  `}
    >
      <div className="">
        <div className="flex items-center gap-2 ">
          <h1 className="text-[18px] mb-10 tracking-wider">Profile</h1>
        </div>
      </div>

      <div className="">
        <div className=" w-full pro-content flex flex-col justify-start items-start gap-2">
          <div className="avatar">
            <input
              type="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
            <div className="ring-primary pro-image ring-offset-base-100  rounded-full  ring-offset-2">
              <div className="w-28 h-28 cursor-pointer">
                <img
                  className="w-full h-full bg-cover bg-center"
                  src={`${
                    authUser
                      ? authUser?.image?.url
                      : " https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }`}
                />
              </div>
            </div>
            <label htmlFor="file">
              <span className="camera-icon">
                <FaCamera />
              </span>
            </label>
          </div>

          <div className="profile-content ">
            <div className="text-content">
              {!nameEdit ? (
                <>
                  <div>
                    <h1 className="">Name</h1>
                    <p className={``}>{authUser?.name}</p>
                  </div>
                  <div>
                    <FaPen onClick={handleOnEditName} className={``} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <input
                      type="text"
                      value={name}
                      className={` input-profile `}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <span className="text-2xl" onClick={() => setOpen(false)}>
                    <TiTick onClick={handleSubmitUpdate} />
                  </span>
                </>
              )}
            </div>
            <div className="text-content">
              {!usernameEdit ? (
                <>
                  <div>
                    <h1 className="">Username</h1>
                    <p className={``}>{authUser?.username}</p>
                  </div>
                  <div>
                    <FaPen onClick={handleOnEditUsername} className={``} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <input
                      type="text"
                      value={username}
                      className={` input-profile `}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <span
                    className="text-2xl"
                    onClick={() => setUsernameEdit(false)}
                  >
                    <TiTick onClick={handleSubmitUpdate} />
                  </span>
                </>
              )}
            </div>

            <div className="text-content">
              <div>
                <h1 className={``}>Email</h1>
                <p className={``}>{authUser?.email}</p>
              </div>
            </div>
            <div>
              <h1 className="">Phone</h1>
              <p className="">{authUser?.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          !theme
            ? "bg-red-500 w-fit text-white "
            : "bg-white w-fit text-gray-900"
        } logout`}
      >
        <Link to={"/login"} onClick={handleLogoutUser} className="logout-btn">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Profile;
