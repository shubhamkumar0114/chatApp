import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../contextApi/useAuth";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { handleUpdateUser } from "../Api/api";
import Loading from "./Loading";

const EditProfile = () => {
  const [authUser] = useContext(UserContext);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation()
  
  useEffect(()=> {
    if(location.pathname === "/editprofile"){
      setName(authUser?.name)
      setEmail(authUser?.email)
      setUsername(authUser?.username)
    }
  },[])

  const handleSendFormData = (e) => {
    e.preventDefault();
    const formData = {
      name,
      username,
      email,
    };

    setName("");
    setEmail("");
    setUsername("");

    try {
      setLoading(true)
      const updateUsers = async () => {
        const res = await handleUpdateUser(authUser , formData)
        console.log(res)
        localStorage.setItem("user", JSON.stringify(res?.data?.userUpdate));
        toast.success(res?.data?.msg);
        setLoading(false)
      };
      updateUsers();
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div
      style={{ maxWidth: "400px", padding: "4px", margin: "0px auto" }}
      className="flex flex-col justify-center h-screen items-center"
    >
      <div className="flex items-center justify-center gap-x-4 mb-4">
        <Link to={"/profile"}>
        <FaArrowLeft />
        </Link>
        <h2 className="">Update User</h2>
      </div>
      <form
        onSubmit={handleSendFormData}
        action=""
        className="flex flex-col w-[100%] gap-y-4 border border-gray-500 p-4 rounded-md"
      >
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
        />
        <input
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="h-10 cursor-pointer bg-blue-600 pl-2 rounded-md outline-none w-full"
          type="submit"
          value={loading? <Loading/> : "Update"}
        />
      </form>
    </div>
  );
};

export default EditProfile;
