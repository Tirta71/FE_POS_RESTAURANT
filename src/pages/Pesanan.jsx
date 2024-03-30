import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import ContentPesanan from "../Components/pesanan/ContentPesanan";
import HeaderPesanan from "../Components/pesanan/HeaderPesanan";

export default function Pesanan() {
  return (
    <>
      <Navbar />
      <main>
        <HeaderPesanan />
        <ContentPesanan />
      </main>
    </>
  );
}
