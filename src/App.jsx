import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Chat from "./components/Chat";
import ChatMsg from "./components/ChatMsg";
import Stories from "./pages/Stories";
import AddNewFriend from "./components/AddNewFriend";
import Layout from "./pages/usersSection/UserSection";
import AllUsers from "./components/AllUsers";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProfile from "./components/EditProfile";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import Cookies from "js-cookie";

function App() {
  // const loginToken = localStorage.getItem("token");
  const token = true; // Cookies.get("token");
  if (!token) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        {/* <Route path="/" element={loginToken ? <HomeMain /> : <Login />} /> */}
        <Route path="/" element={token ? <Layout /> : <Login />}>
          <Route path="/" element={<AllUsers />} />
          <Route path="stories" element={token ? <Stories /> : <Login />} />
        </Route>

        <Route path="/chat" element={token ? <Chat /> : <Login />} />
        <Route
          path="/addfriend"
          element={token ? <AddNewFriend /> : <Login />}
        />
        <Route path="/chatmsg" element={token ? <ChatMsg /> : <Login />} />
        <Route path="/profile" element={token ? <Profile /> : <Login />} />
        <Route
          path="/editprofile"
          element={token ? <EditProfile /> : <Login />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
