import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { handleGetAllUsers } from "../Api/api";

export const AuthUserClick = createContext();

const UserContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState([]);
  const [selectedUser, setSelectedUser] = useState(
    JSON.parse(localStorage.getItem("selectUser"))
  );

  useEffect(() => {
    const getSelectedUser = () => {
      localStorage.setItem("selectUser", JSON.stringify(selectedUser));
    };
    getSelectedUser();
  }, [selectedUser, setSelectedUser]);

  useEffect(() => {
    const getAllUsers = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const getRes = await handleGetAllUsers(token);
        setUsers(getRes);
      }
    };
    getAllUsers();
  }, []);

  return (
    <AuthUserClick.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        chat,
        setChat,
      
      }}
    >
      {children}
    </AuthUserClick.Provider>
  );
};

export default UserContext;
