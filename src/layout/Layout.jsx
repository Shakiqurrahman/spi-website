import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Location from "../components/Location/Location";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Location />
      <Footer />
    </>
  );
};

export default Layout;
