import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function ContentCheckout() {
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

  function increaseQuantity(menuId) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.menuId === menuId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  function decreaseQuantity(menuId) {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.menuId === menuId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Filter items with quantity greater than 0
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  function removeItem(menuId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCartItems = cartItems.filter(
          (item) => item.menuId !== menuId
        );
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  }

  function handleCheckout() {
    const ID_Pelanggan = localStorage.getItem("ID_Pelanggan");
    if (ID_Pelanggan) {
      window.location.href = "/menu-pesanan";
    } else {
      window.location.href = "/checkout";
    }
  }

  return (
    <div className="section-primary shop-cart pt-120 pb-101">
      <div className="container">
        <div className="woocommerce">
          <form action="#" className="woocommerce-cart-form">
            <table
              className="table-cart shop_table shop_table_responsive cart woocommerce-cart-form__contents table"
              id="shop_table"
            >
              <thead>
                <tr>
                  <th className="product-remove">&nbsp;</th>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => {
                  const menu = menuData.find(
                    (menu) => menu.ID_Menu === cartItem.menuId
                  );

                  if (!menu) {
                    return null;
                  }

                  return (
                    <tr
                      key={menu.ID_Menu}
                      className="woocommerce-cart-form__cart-item cart_item"
                    >
                      <td className="product-remove">
                        <a
                          onClick={() => removeItem(cartItem.menuId)}
                          className="remove"
                          aria-label="Remove this item"
                          style={{ cursor: "pointer" }}
                        >
                          <span className="lnr lnr-cross-circle"></span>
                        </a>
                      </td>
                      <td className="product-thumbnail">
                        <a href="">
                          <img
                            src={`http://localhost:8000/images/${menu.ImageMenu}`}
                            className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="product-name" data-title="Product">
                        <a href="shop-single.html">{menu.Nama_Menu}</a>
                      </td>
                      <td className="product-price" data-title="Price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            Rp{" "}
                          </span>
                          {menu.Harga}
                        </span>
                      </td>
                      <td className="product-quantity" data-title="Quantity">
                        <div className="quantity">
                          <input
                            type="number"
                            className="input-text qty text input-quantity"
                            step="1"
                            min="0"
                            name={`cart[${cartItem.menuId}][qty]`}
                            value={cartItem.quantity}
                            title="Qty"
                            size="4"
                          />
                          <div className="icon">
                            <a
                              onClick={() => increaseQuantity(cartItem.menuId)}
                              className="number-button plus"
                            >
                              +
                            </a>
                            <a
                              onClick={() => decreaseQuantity(cartItem.menuId)}
                              className="number-button minus"
                            >
                              -
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="product-subtotal" data-title="Total">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            Rp
                          </span>
                          {menu.Harga * cartItem.quantity}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="product-remove none">&nbsp;</td>
                  <td colSpan="3" className="actions">
                    <input
                      type="hidden"
                      id="_wpnonce"
                      name="_wpnonce"
                      value="54045be64c"
                    />
                  </td>
                  <td colSpan="2" className="cart-subtotal">
                    <label>Subtotal:</label>
                    <span className="woocommerce-Price-amount amount ">
                      <span className="woocommerce-Price-currencySymbol">
                        Rp{" "}
                      </span>
                      {calculateSubtotal()}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bottom">
              <Link
                className="au-btn go-shopping round has-bg au-btn--hover"
                onClick={handleCheckout}
              >
                Checkout
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
