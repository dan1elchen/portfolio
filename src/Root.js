import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/index";

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
