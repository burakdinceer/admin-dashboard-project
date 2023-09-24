import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import '../../styles/global.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-main">
        <div className="layout-menu">
          <Menu />
        </div>
        <div className="layout-children">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
