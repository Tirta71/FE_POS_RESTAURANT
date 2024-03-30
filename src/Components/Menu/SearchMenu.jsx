import React from "react";

export default function SearchMenu() {
  return (
    <div className="widgets widget_search">
      <form method="get" className="search-form">
        <input
          className="form-control"
          type="text"
          name="s"
          id="s"
          placeholder="Search"
        />
        <button className="search-icon">
          <span className="lnr lnr-magnifier"></span>
        </button>
      </form>
    </div>
  );
}
