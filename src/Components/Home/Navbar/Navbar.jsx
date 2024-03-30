import React from "react";
import ContentNavbar from "./ContentNavbar";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

export default function Navbar() {
  return (
    <header>
      <ContentNavbar />

      <NavbarMobile />

      <div
        class="modal-search modal"
        id="modalSearch"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form method="get">
              <input type="text" placeholder="Search" />
              <button>
                <span class="lnr lnr-magnifier"></span>
              </button>
            </form>
          </div>
        </div>
        <span
          class="lnr lnr-cross"
          data-toggle="modal"
          data-target="#modalSearch"
        ></span>
      </div>

      <div class="menu-sidebar">
        <div class="close-btn">
          <span class="lnr lnr-cross" id="close-icon"></span>
        </div>
        <a href="index.html" class="logo">
          <img src="images/logo-menu-sidebar.png" alt="" />
        </a>
        <p class="text">
          Et harum quidem rerum facilis est et expedita distinctio nam libero.
        </p>

        <div
          class="owl-carousel owl-theme image-slider style-1"
          id="image-carousel"
        >
          <div class="item">
            <a href="#">
              <img src="images/menu-sidebar-slide-1.jpg" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img src="images/menu-sidebar-slide-2.jpg" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img src="images/menu-sidebar-slide-3.jpg" alt="" />
            </a>
          </div>
        </div>

        <div class="contact-part">
          <div class="contact-line">
            <span class="lnr lnr-home"></span>
            <span>No 40 Baria Sreet 133/2</span>
          </div>
          <div class="contact-line">
            <a href="tel:+15618003666666">
              <span class="lnr lnr-phone-handset"></span>
              <span> + (156) 1800-366-6666</span>
            </a>
          </div>
          <div class="contact-line">
            <a href="#">
              <span class="lnr lnr-envelope"></span>
              <span> Eric-82@example.com</span>
            </a>
          </div>
        </div>

        <div class="social">
          <a href="#">
            <i class="zmdi zmdi-twitter"></i>
          </a>
          <a href="#">
            <i class="zmdi zmdi-facebook-box"></i>
          </a>
          <a href="#">
            <i class="zmdi zmdi-linkedin"></i>
          </a>
          <a href="#">
            <i class="zmdi zmdi-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
