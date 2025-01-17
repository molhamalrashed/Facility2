import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsersProvider } from "./components/UserContext";
import Login from "./components/login";
import SignUp from "./components/signup";
import ResetPassword from "./components/reset-password";
import Landing from "./components/landing";
import Profile from "./components/profile";
import RegisterProperty from "./components/registerProperty";
import AddNotification from "./components/addNotification";

const App = () => {
  return (
    <UsersProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/register-form" element={<RegisterProperty />} />
          <Route path="/add-notification" element={<AddNotification />} />
        </Routes>
      </Router>
    </UsersProvider>
  );
};

export default App;
