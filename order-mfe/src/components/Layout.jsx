import React from "react";
import { Outlet } from "react-router-dom";

import { NavBar, Footer } from "../configs/config.jsx";

export default function Layout(props) {
  return (
    <>
      <NavBar cartCount={props.cartCount} />
      <Outlet />
      <Footer />
    </>
  );
}
