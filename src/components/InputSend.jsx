import React, { useContext, useEffect, useState } from "react";
import { AuthUserClick } from "../contextApi/Context";
import { IoMdSend } from "react-icons/io";
import { handleSendMessage } from "../Api/api";
import { toast } from "react-hot-toast";
import Loading from "./Loading";
import { SocketContext } from "../contextApi/Sockets";
import socket from "../services/Socket";
import { useAuth } from "../contextApi/useAuth";
import { ThemeContext } from "../contextApi/Theme";

const InputSend = ({ box }) => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useContext(AuthUserClick);
  const [authUser] = useAuth();
  const { theme, setTheme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [chat, setChat, online, sockets, typing, setIsTyping] =
    useContext(SocketContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;
    const formData = new FormData();
    if (message) {
      formData.append("message", message);
    } else {
      formData.append("message", "");
    }
    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await handleSendMessage(selectedUser, formData, token);

      setMessage("");
      setImage(null);
      toast.success("Send message");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Typing indicator
  const handleTyping = (e) => {
    setMessage(e.target.value);

    socket.emit("typing", {
      senderId: authUser._id,
      receiverId: selectedUser._id,
    });

    if (typingTimeout) clearTimeout(typingTimeout);

    setTypingTimeout(
      setTimeout(() => {
        socket.emit("stopTyping", {
          senderId: authUser._id,
          receiverId: selectedUser._id,
        });
      }, 1000)
    );
  };

  useEffect(() => {
    const handleTyping = (senderId) => {
      if (senderId === selectedUser._id) setIsTyping(true);
    };

    const handleStopTyping = (senderId) => {
      if (senderId === selectedUser._id) setIsTyping(false);
    };

    socket.on("typing", handleTyping);
    socket.on("stopTyping", handleStopTyping);

    return () => {
      socket.off("typing", handleTyping);
      socket.off("stopTyping", handleStopTyping);
    };
  }, [selectedUser]);

  return (
    <div
      className={`${
        theme
          ? "bg-zinc-800 text-white shadow shadow-zinc-800 "
          : "bg-white shadow shadow-zinc-400 text-black"
      }  input-section `}
    >
      <div className="w-full z-50 ">
        <form onSubmit={handleSubmit} className="flex">
          <div className="file-inputs">
            <label htmlFor="file">
              <h1 className="">+</h1>
            </label>
            <input
              type="file"
              name=""
              onChange={(e) => setImage(e.target.files[0])}
              hidden
              id="file"
            />
          </div>
          <div className="file-inputs w-[96%]">
            <input
              type="text"
              value={message}
              onChange={handleTyping}
              className={`w-full input-msg ${
                theme ? "placeholder:text-white" : "placeholder:text-black"
              }`}
              placeholder="Type a message...."
            />
            <button
              // disabled={message.length === 0}
              className={`${
                message || image
                  ? "disabled:cursor-default opacity-95"
                  : "disabled:cursor-not-allowed opacity-35"
              }  -rotate-12 send-btn `}
              type="submit"
            >
              {loading ? <Loading className="text-sm" /> : <IoMdSend />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSend;
