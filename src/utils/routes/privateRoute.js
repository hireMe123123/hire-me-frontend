import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const company = useSelector((state) => state.company);
  const isAutnenticated = localStorage.getItem("token");
  const location = useLocation();
  const roleUser = Object.keys(company.data).length > 0 ? true : false;

  if (!isAutnenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (props.isAdmin && !roleUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
