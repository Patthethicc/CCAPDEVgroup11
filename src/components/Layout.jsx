import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import LeftSideBar from "./LeftSideBar.jsx";
import RightSideBar from "./RightSideBar.jsx";
import Footer from "./Footer.jsx";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <LeftSideBar />
        <Outlet />
        <RightSideBar />
      </main>
      <Footer />
    </div>
  );
}
