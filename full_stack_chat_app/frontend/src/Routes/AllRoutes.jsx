import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";
import { Chat } from "../Pages/Chat";
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};
