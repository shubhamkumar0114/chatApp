import React, { useContext } from "react";

import { Outlet } from "react-router-dom";
import TopNavBar from "../../components/TopNavBar";
import BottomBtnSection from "../../components/BottomBtnSection";


const Layout = () => {
  
  return (
    <div>
      <div>
        <TopNavBar />
        <div className="h-screen">
          <Outlet />
        </div>
      </div>
      <div className="md:hidden block">
        <BottomBtnSection />
      </div>
    </div>
  );
};

export default Layout;
