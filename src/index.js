import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./pages/app";
import RegistrationPage from "./pages/register/register";
import ProfilePage from "./pages/profile/profile";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
