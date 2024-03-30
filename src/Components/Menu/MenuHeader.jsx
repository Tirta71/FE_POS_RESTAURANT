import React from "react";

export default function MenuHeader() {
  return (
    <section className="page-info set-bg ">
      <img
        src="https://images.pexels.com/photos/3850433/pexels-photo-3850433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Our Menu"
        className="menu-image"
        style={{
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div className="section-header">
        <h1 className="text-white ">Our menu</h1>
        <span>~ See what we offer ~</span>
      </div>
    </section>
  );
}
