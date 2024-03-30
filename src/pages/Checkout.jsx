/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";

import BreadCrumb from "../Components/Checkout/BreadCrumb";
import ContentCheckout from "../Components/Checkout/ContentCheckout";

export default function Checkout() {
  return (
    <>
      <Navbar />
      <main>
        <BreadCrumb />
        <ContentCheckout />
      </main>
    </>
  );
}
