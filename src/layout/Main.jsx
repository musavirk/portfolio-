import React from "react";
import MyNavbar from "../components/MyNavbar";

function Main({ children }) {
  return (
    <>
      <MyNavbar />
      <div className="main">{children}</div>
    </>
  );
}

export default Main;
