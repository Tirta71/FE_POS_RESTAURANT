import React from "react";

export default function HeaderPesananMenu() {
  return (
    <section class="page-breadcrumb" style={{ backgroundColor: "black" }}>
      <div class="container">
        <div class="row justify-content-between align-content-center">
          <div class="col-md-auto">
            <h3 className="text-white">Menu Pesanan</h3>
          </div>
          <div class="col-md-auto">
            <ul class="au-breadcrumb">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="shop-cart.html">Menu Pesanan</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
