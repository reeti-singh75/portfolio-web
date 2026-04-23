import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminLogin from './admin/Login';
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './admin/ProtectedRoute';

const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public portfolio at / */}
        <Route path="/" element={<App />} />

        {/* Admin login (public) - available at /login per spec */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected admin dashboard */}
        <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        {/* Fallback to portfolio for anything else (keeps existing site intact) */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRouter;
