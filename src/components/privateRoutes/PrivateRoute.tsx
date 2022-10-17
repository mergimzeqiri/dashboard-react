import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../authentication/Authcontext";

export default function PrivateRoute() {
  const auth = useAuthContext();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
