import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="text-center bg-gray-200 h-full min-h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
