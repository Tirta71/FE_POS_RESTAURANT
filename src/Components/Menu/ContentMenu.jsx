import React, { useEffect, useState } from "react";
import axios from "axios";
import KategoriMenu from "./kategoriMenu";
import SearchMenu from "./SearchMenu";
import SortingMenu from "./SortingMenu";
import Swal from "sweetalert2";
import "./Menu.css";
export default function ContentMenu() {
  const [menus, setMenus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}menus`)
      .then((response) => {
        setMenus(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  const handleCategoryClick = (kategoriId) => {
    setSelectedCategory(kategoriId);
  };

  const handleAddToCart = (menuId) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.menuId === menuId
    );
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ menuId: menuId, quantity: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    Swal.fire({
      icon: "success",
      title: "Item Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const filteredMenus = selectedCategory
    ? menus.filter((menu) => menu.ID_Kategori === selectedCategory)
    : menus;

  return (
    <section className="section-primary pt-150 pb-113 shop-list">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <SortingMenu />
            <div className="row products">
              {filteredMenus.map((menu) => (
                <div className="col-md-6 col-lg-4" key={menu.ID_Menu}>
                  <div className="item">
                    <div className="thumb">
                      <img
                        src={`http://localhost:8000/images/${menu.ImageMenu}`}
                        alt={menu.Nama_Menu}
                        style={{
                          width: "500px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <button
                        onClick={() => handleAddToCart(menu.ID_Menu)}
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        style={{ border: "none", cursor: "pointer" }}
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className="info">
                      <h5 className="woocommerce-loop-product__title">
                        <a href="#">{menu.Nama_Menu}</a>
                      </h5>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            Rp.
                          </span>{" "}
                          {menu.Harga}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <SearchMenu />
              <KategoriMenu onCategoryClick={handleCategoryClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
