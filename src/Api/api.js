import axios from "axios";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: "http://localhost:4001/api",
  withCredentials: true,
});

// All Api Functions
// Register Api
export const register = async (data) => {
  await API.post("/user/register", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Login Api
export const login = async (data) => {
  const res = await API.post("/user/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

// All Users Api
export const handleGetAllUsers = async (token) => {
  const res = await API.get(`/user/allusers`, {
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data?.user;
};

// All Message Api
export const handleGetAllMessage = async (token, selectedUser) => {
  const res = await API.get(`/message/reciver/${selectedUser?._id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

// Update User
export const handleUpdateUser = async (authUser, formData) => {
  const res = await API.put(`/user/updateuser/${authUser?._id}`, formData, {
    Headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

// SendMessage Api
export const handleSendMessage = async (selectedUser, message, token) => {
  await API.post(
    `/message/sender/${selectedUser?._id}`,
    { message },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ); 
};

// Logout user frontent
export const handleLogoutUser = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("selectUser");
  Cookies.remove("token")
  toast.success("Logout Successfully ✔");
};

// ForgetPassword
export const handleForgetPassword = async (email) => {
  await API.post(
    "/user/forgotpassword",
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// Reset Password
export const handleResetPassword = async (password, token) => {
  await API.post(
    `/user/resetpassword/${token}`,
    {
      password,
    },
    { 
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

