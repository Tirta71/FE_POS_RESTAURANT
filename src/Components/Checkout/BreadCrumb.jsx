import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb() {
  return (
    <section class="page-breadcrumb" style={{ backgroundColor: "black" }}>
      <div class="container">
        <div class="row justify-content-between align-content-center">
          <div class="col-md-auto">
            <h3 className="text-white fs-6">Cart</h3>
          </div>
          <div class="col-md-auto">
            <ul class="au-breadcrumb">
              <li>
                <Link to={"/"} style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"#"}>Shop-cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
