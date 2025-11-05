import React, { useContext } from "react";

import { Outlet } from "react-router-dom";
import TopNavBar from "../../components/TopNavBar";
import BottomBtnSection from "../../components/BottomBtnSection";


const Layout = () => {
  
  return (
    <div>
      <div>
        <TopNavBar />
        <div style={{ minHeight: "77vh" }}>
          <Outlet />
        </div>
      </div>
      <div className="">
        <BottomBtnSection />
      </div>
    </div>
  );
};

export default Layout;
