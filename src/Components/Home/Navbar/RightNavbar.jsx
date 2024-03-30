/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function RightNavbar() {
  const [cartItems, setCartItems] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);

    axios
      .get(`${apiUrl}menus`)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  const handleRemoveItem = (menuId) => {
    const updatedCartItems = cartItems.filter((item) => item.menuId !== menuId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="right">
      <div className="action">
        <div className="notify">
          <button type="button" className="btn btn-white">
            <FontAwesomeIcon icon={faShoppingCart} />{" "}
            <span className="badge bg-dark text-white">
              {" "}
              {cartItems.length}
            </span>
          </button>

          <div
            id="woocommerce_widget_cart-2"
            className="widget woocommerce widget_shopping_cart"
          >
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                {cartItems.map((cartItem) => {
                  const menu = menuData.find(
                    (menu) => menu.ID_Menu === cartItem.menuId
                  );

                  if (menu) {
                    return (
                      <li
                        key={menu.ID_Menu}
                        className="woocommerce-mini-cart-item mini_cart_item clearfix"
                      >
                        <a
                          className="remove remove_from_cart_button"
                          aria-label="Remove this item"
                          onClick={() => handleRemoveItem(menu.ID_Menu)}
                        >
                          <span className="lnr lnr-cross-circle"></span>
                        </a>
                        <a href="#" className="image-holder">
                          <img
                            src={`http://localhost:8000/images/${menu.ImageMenu}`}
                            className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                            alt=""
                            style={{ width: "200px", height: "50px" }}
                          />
                          <span className="product-name">{menu.Nama_Menu}</span>
                        </a>
                        <span className="quantity">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              Rp
                            </span>{" "}
                            {menu.Harga}
                          </span>
                          x{cartItem.quantity}
                        </span>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">Rp </span>
                  {calculateSubtotal()}
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons">
                <Link to={"/shop-cart"} className="button wc-forward view-cart">
                  View cart
                </Link>
                <Link to={"/checkout"} className="button checkout wc-forward">
                  Checkout
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function calculateSubtotal() {
    return cartItems.reduce(
      (subtotal, item) => subtotal + item.quantity * getMenuPrice(item.menuId),
      0
    );
  }

  function getMenuPrice(menuId) {
    const menu = menuData.find((menu) => menu.ID_Menu === menuId);
    return menu ? menu.Harga : 0;
  }
}
