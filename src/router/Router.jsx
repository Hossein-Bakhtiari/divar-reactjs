import React from "react";
import HomePage from "../pages/HomePage";
import DsashboardPage from "../pages/DsashboardPage";
import AdminPage from "../pages/AdminPage";
import PageNotFound from "../pages/404";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DsashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
