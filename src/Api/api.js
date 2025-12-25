import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
const API = axios.create({
  baseURL: "https://chat-backend-api-r9xu.onrender.com/api",
  withCredentials: true,
});

// All Api Functions
// Register Api
export const register = async (data) => {
  await API.post("/user/register", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Send otp
export const handleSendOtp = async (number) => {
  try {
    const res = await API.post(
      "/user/sendotp",
      { phone: number },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    return;
  }
};

// Login Api
export const login = async (data) => {
  const res = await API.post("/user/login", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

// All Users Api
export const handleGetAllUsers = async (token) => {
  const res = await API.get(`/user/allusers`, {
    withCredentials: true,
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
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

// Update User
export const handleUpdateUser = async (authUser, formData) => {
  const res = await API.put(`/user/updateuser/${authUser?._id}`, formData, {
    withCredentials: true,
    Headers: {
      "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

// SendMessage Api
export const handleSendMessage = async (selectedUser, formData, token) => {
  return await API.post(`/message/sender/${selectedUser._id}`, formData, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// Logout user frontent
export const handleLogoutUser = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("selectUser");
  Cookies.remove("token");
  toast.success("Logout Successfully ✔");
};

// ForgetPassword
export const handleForgetPassword = async (email) => {
  await API.post(
    "/user/forgotpassword",
    { email },
    {
      withCredentials: true,
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
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// export const handleUploadFile = async (file , selectedUser , token) => {
//   console.log(file);
//   try {
//     const res = await API.post(`/message/upload/${selectedUser?._id}`, file, {
//       headers: {
//         "Content-Type": "multipart/form-data", // VERY IMPORTANT
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// delete Msg api call

export const handleDelete = async (msgId, token) => {
  // console.log(msgId, token);
  const res = await API.post(`/message/deletemessage/${msgId}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
