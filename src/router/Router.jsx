import React from "react";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import PageNotFound from "../pages/404";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import DashBoardPage from "../pages/DashBoardPage";

function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);
  console.log({ data, isLoading });
  if (isLoading) return <h1>is Loading...</h1>;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
