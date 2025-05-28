import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import AppWrapper from "../components/AppWrapper";

import React from "react";

const MainLayout = () => {
  const location = useLocation();
  const noNavFooterPaths = ["/login", "/signUp"];
  const showNavFooter = !noNavFooterPaths.includes(location.pathname);

  return (
    <div>
      <Header />
      {showNavFooter && <Navbar />}

      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>

      {showNavFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
