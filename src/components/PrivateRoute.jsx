// components/PrivateRoute.jsx
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "For see this page Please Login first",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/login", { replace: true });
      });
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Or a loading spinner while redirecting
  }

  return children;
};

export default PrivateRoute;
