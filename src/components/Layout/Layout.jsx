import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import HelpButton from "../HelpButton";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <HelpButton />

      <Footer />
    </>
  );
};

export default Layout;
