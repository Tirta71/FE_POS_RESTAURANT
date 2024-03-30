import React from "react";

export default function SortingMenu() {
  return (
    <div className="sorting">
      <form method="get" className="woocommerce-ordering">
        <p className="woocommerce-result-count">Showing 1–15 of 27 results</p>
        <div className="form-holder">
          <select name="orderby" className="orderby form-control">
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="date">Sort by newness</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
          <span className="lnr lnr-chevron-down"></span>
        </div>
      </form>
    </div>
  );
}
