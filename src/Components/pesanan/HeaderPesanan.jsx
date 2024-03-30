import React from "react";

export default function HeaderPesanan() {
  return (
    <section className="page-breadcrumb" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row justify-content-between align-content-center">
          <div className="col-md-auto">
            <h3 className="text-white">CheckOut</h3>
          </div>
          <div className="col-md-auto">
            <ul className="au-breadcrumb">
              <li>
                <a href="index.html" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="shop-cart.html">My Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
