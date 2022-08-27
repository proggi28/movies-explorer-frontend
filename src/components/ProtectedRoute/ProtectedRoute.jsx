import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, available }) {
  if (available) {
    return children;
  }
  return <Navigate to="/" />;
}