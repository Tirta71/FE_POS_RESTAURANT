import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import MenuHeader from "../Components/Menu/MenuHeader";
import ContentMenu from "../Components/Menu/ContentMenu";

export default function Menu() {
  return (
    <>
      <Navbar />

      <main>
        <MenuHeader />
        <ContentMenu />
      </main>
    </>
  );
}
