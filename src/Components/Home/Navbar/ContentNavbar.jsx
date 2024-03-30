import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbarTop.css";
import RightNavbar from "./RightNavbar";

export default function ContentNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar-desktop ${scrolled ? "scrolled" : ""}`}>
      <div className="left">
        <a href="index.html" className="logo">
          <img src="images/logo.png" alt="Royate" />
        </a>
      </div>
      <ul>
        <li
          className={
            location.pathname === "/" ? "current has-children" : "has-children"
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/menu" ? "current" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
        <li
          className={
            location.pathname === "/reservation"
              ? "current has-children"
              : "has-children"
          }
        >
          <Link to="/reservation">Reservation</Link>
        </li>
      </ul>
      <RightNavbar />
    </nav>
  );
}
