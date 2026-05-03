import { Outlet } from "react-router-dom";

import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";

import "./style.scss";

const Layout = () => (
  <div className="app-layout">
    <Header />

    <div className="layout-banner">banner</div>

    <div className="layout-body">
      <Sidebar />

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
