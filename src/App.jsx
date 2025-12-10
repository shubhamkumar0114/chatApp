import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

const MainSection = lazy(() => import("./pages/mains/MainSection"));
const Login = lazy(() => import("./pages/user/Login"));
const Signup = lazy(() => import("./pages/user/Signup"));
const ForgetPassword = lazy(() => import("./components/ForgetPassword"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const Chat = lazy(() => import("./components/Chat"));
const ChatMsg = lazy(() => import("./components/ChatMsg"));
const Right = lazy(() => import("./pages/mains/Right"));
const VerifyOtp = lazy(() => import("./components/VerifyOtp"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

function App() {
  // const loginToken = localStorage.getItem("token");
  const token = Cookies.get("token");
  if (!token) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={token ? <MainSection /> : <Login />} />
        <Route path="/chat" element={token ? <Chat /> : <Login />} />
        <Route path="/rightchat" element={token ? <Right /> : <Login />} />
        <Route path="/chatmsg" element={token ? <ChatMsg /> : <Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
