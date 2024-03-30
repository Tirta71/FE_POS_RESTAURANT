import React, { useState } from "react";
import "./navMobile.css";
export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className={`navbar-mobile fixed-navbar ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="container">
        <div className="heading">
          <div className="left">
            <div className="navbar-mobile__toggler" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <a href="index.html" className="logo">
            <img src="images/logo.png" alt="Royate" />
          </a>
          <div className="right">
            <div className="action">
              <div className="notify">
                <img src="images/notify.png" alt="" />
                <span className="notify-amount">0</span>

                <div className="widget woocommerce widget_shopping_cart">
                  <div className="widget_shopping_cart_content">
                    <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                      <li className="woocommerce-mini-cart-item mini_cart_item clearfix">
                        <a
                          href="#"
                          className="remove remove_from_cart_button"
                          aria-label="Remove this item"
                        >
                          <span className="lnr lnr-cross-circle"></span>
                        </a>
                        <a href="#" className="image-holder">
                          <img
                            src="images/widget-cart-thumb-1.jpg"
                            className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                            alt=""
                          />
                          <span className="product-name">Best Brownies</span>
                        </a>
                        <span className="quantity">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            18
                          </span>
                          x1
                        </span>
                      </li>
                      <li className="woocommerce-mini-cart-item mini_cart_item clearfix">
                        <a
                          href="#"
                          className="remove remove_from_cart_button"
                          aria-label="Remove this item"
                        >
                          <span className="lnr lnr-cross-circle"></span>
                        </a>
                        <a href="#" className="image-holder">
                          <img
                            src="images/widget-cart-thumb-2.jpg"
                            className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                            alt=""
                          />
                          <span className="product-name">Angela's Awesome</span>
                        </a>
                        <span className="quantity">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            28
                          </span>
                          x3
                        </span>
                      </li>
                    </ul>
                    <p className="woocommerce-mini-cart__total total">
                      <strong>Subtotal:</strong>
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        102
                      </span>
                    </p>
                    <p className="woocommerce-mini-cart__total total">
                      <strong>Total:</strong>
                      <span className="woocommerce-Price-amount amount color-cdaa7c">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        102
                      </span>
                    </p>
                    <p className="woocommerce-mini-cart__buttons buttons">
                      <a href="#" className="button wc-forward view-cart">
                        View cart
                      </a>
                      <a href="#" className="button checkout wc-forward">
                        Checkout
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <span
                className="lnr lnr-magnifier search-icon"
                data-toggle="modal"
                data-target="#modalSearch"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <nav id="main-nav" className={isMenuOpen ? "menu-open" : ""}>
        <ul>
          <li className="current">
            <a href="#" target="_blank">
              Home
            </a>
            <ul>
              <li className="current">
                <a href="index.html">HomePage_v1</a>
              </li>
              <li>
                <a href="index-2.html">HomePage_v2</a>
              </li>
              <li>
                <a href="index-3.html">HomePage_v3</a>
              </li>
              <li>
                <a href="index-4.html">HomePage_v4</a>
              </li>
              <li>
                <a href="index-5.html">HomePage_v5</a>
              </li>
              <li>
                <a href="index-6.html">HomePage_v6</a>
              </li>
              <li>
                <a href="index-7.html">HomePage_v7</a>
              </li>
              <li>
                <a href="index-8.html">HomePage_v8</a>
              </li>
              <li>
                <a href="index-9.html">HomePage_v9</a>
              </li>
              <li>
                <a href="index-10.html">HomePage_v10</a>
              </li>
              <li>
                <a href="index-11.html">HomePage_v11</a>
              </li>
              <li>
                <a href="index-12.html">HomePage_v12</a>
              </li>
              <li>
                <a href="index-13.html">HomePage_v13</a>
              </li>
              <li>
                <a href="index-14.html">HomePage_v14</a>
              </li>
              <li>
                <a href="index-15.html">HomePage_v15</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Page</a>
            <ul>
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
              <li>
                <a href="coming-soon.html">Coming Soon</a>
              </li>
              <li>
                <a href="#">Gallery</a>
                <ul>
                  <li>
                    <a href="gallery-three-columns.html">Three Colums</a>
                  </li>
                  <li>
                    <a href="gallery-four-columns.html">Four Columns</a>
                  </li>
                  <li>
                    <a href="gallery-three-columns-wide.html">
                      Three Columns Wide
                    </a>
                  </li>
                  <li>
                    <a href="gallery-four-columns-wide.html">
                      Four Colums Wide
                    </a>
                  </li>
                  <li>
                    <a href="masonry-grid.html">Masonry</a>
                  </li>
                  <li>
                    <a href="masonry-wide.html">Masonry Wide</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="project.html">Project</a>
              </li>
              <li>
                <a href="meet-the-chefs.html">Meet The Cheefs</a>
              </li>
              <li>
                <a href="404.html">404</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="menu.html">Menu</a>
          </li>
          <li>
            <a href="#">Reservation</a>
            <ul>
              <li>
                <a href="reservation_v1.html">Reservation_v1</a>
              </li>
              <li>
                <a href="reservation_v2.html">Reservation_v2</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="#">Blog</a>
            <ul>
              <li>
                <a href="blog-masonry.html">Blog Masonry</a>
              </li>
              <li>
                <a href="blog-masonry-wide.html">Blog Masonry Wide</a>
              </li>
              <li>
                <a href="blog-standard-right-sidebar.html">
                  Blog Standard Right Sidebar
                </a>
              </li>
              <li>
                <a href="blog-standard-left-sidebar.html">
                  Blog Standard Left Sidebar
                </a>
              </li>
              <li>
                <a href="blog-standard-no-sidebar.html">
                  Blog Standard No Sidebar
                </a>
              </li>
              <li>
                <a href="blog-single.html">Blog Single</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="#">Shop</a>
            <ul>
              <li>
                <a href="shop-list.html">Shop List</a>
              </li>
              <li>
                <a href="shop-three-column.html">Three Columns Grid</a>
              </li>
              <li>
                <a href="shop-three-column-wide.html">Three Columns Wide</a>
              </li>
              <li>
                <a href="shop-four-column.html">Four Colums Grid</a>
              </li>
              <li>
                <a href="shop-four-column-wide.html">Four Colums Wide</a>
              </li>
              <li>
                <a href="shop-cart.html">Shop Cart</a>
              </li>
              <li>
                <a href="shop-single.html">Shop Single</a>
              </li>
              <li>
                <a href="sign-in.html">Sign In</a>
              </li>
              <li>
                <a href="sign-up.html">Sign Up</a>
              </li>
              <li>
                <a href="checkout.html">CheckOut</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
