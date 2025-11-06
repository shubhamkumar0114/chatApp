import React, { useContext, useState } from "react";
import { AuthUserClick } from "../contextApi/Context";
import { IoMdSend } from "react-icons/io";
import { handleSendMessage } from "../Api/api";
import { toast } from "react-toastify";
import Loading from "./Loading";

const InputSend = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useContext(AuthUserClick);
  const [loading , setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload nahi hoga
    setMessage("");
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      await handleSendMessage(selectedUser, message, token);
      setLoading(false)
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" py-1 bg-white shadow-md px-1">
      <div className="w-full z-50">
        <form onSubmit={handleSubmit} className="flex ml-0">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-2 pl-2 border border-gray-300 outline-none rounded-md"
            placeholder="Type Here...."
          />
          <button
            className="border border-gray-400 rounded-md ml-2 p-3 text-md"
            type="submit"
          >
            {loading ? <Loading /> : <IoMdSend />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputSend;
