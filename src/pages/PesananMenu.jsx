import React from "react";

import Navbar from "../Components/Home/Navbar/Navbar";
import HeaderPesananMenu from "../Components/Pesanan Menu/HeaderPesananMenu";
import ContentPesananMenu from "../Components/Pesanan Menu/ContentPesananMenu";

export default function PesananMenu() {
  return (
    <>
      <Navbar />

      <main>
        <HeaderPesananMenu />
        <ContentPesananMenu />
      </main>
    </>
  );
}
