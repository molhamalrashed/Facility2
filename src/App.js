import React from 'react';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import ResetPassword from './components/reset-password';
import Landing from './components/landing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path= "/reset-password" element={<ResetPassword />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
