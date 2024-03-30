import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import OurService from "../Components/Home/OurService/OurService";
import OurFoodMenu from "../Components/Home/OurService/OurFoodMenu";
import Footer from "../Components/Layout/Footer";

export default function Home() {
  return (
    <>
      {/* <div className="images-preloader">
        <div id="preloader" className="rectangle-bounce">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <Navbar />

      <main>
        <OurService />

        <OurFoodMenu />
      </main>
      <Footer />
    </>
  );
}
