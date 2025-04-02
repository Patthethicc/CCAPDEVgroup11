import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header.jsx";
import LeftSideBar from "./Sidebars/LeftSideBar.jsx";
import RightSideBar from "./Sidebars/RightSideBar.jsx";
import Footer from "./Footer.jsx";
import "./Layout.css";

export default function Layout({ handleSearch, search }) {
  const [category, setCategory] = useState("Home");
  return (
    <div className="layout bg-[url('../assets/images/bg.png')]">
      <Header handleSearch={handleSearch} search={search} />
      <main>
        <LeftSideBar category={category} setCategory={setCategory}/>
        <Outlet context={{category}}/>
        <RightSideBar />
      </main>
      <Footer />
    </div>
  );
}
