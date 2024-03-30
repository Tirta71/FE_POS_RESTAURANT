import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurFoodMenu() {
  const [menuData, setMenuData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    AOS.init({});

    axios
      .get(`${apiUrl}menus/`)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => console.error("Error fetching menu data:", error));

    axios
      .get(`${apiUrl}kategori-menus/`)
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => console.error("Error fetching category data:", error));
  }, []);

  return (
    <section className="section-primary pb-120">
      <div className="container">
        <div className="section-header">
          <h2>Our Food Menu</h2>
          <span>~ See what we offer ~</span>
        </div>
        <div className="our-menu-alternate">
          {categoryData.map((category, index) => {
            const firstMenuImage = menuData.find(
              (menu) => menu.ID_Kategori === category.ID_Kategori
            )?.ImageMenu;

            const filteredMenuData = menuData
              .filter((menu) => menu.ID_Kategori === category.ID_Kategori)
              .slice(0, 5);

            return (
              <div
                className={`our-menu-block style-${
                  index % 2 === 0 ? "1" : "2"
                }`}
                key={index}
                data-aos="fade-up"
              >
                <img
                  src={`http://localhost:8000/images/${firstMenuImage}`}
                  alt=""
                  style={{
                    width: "800px",
                    height: "602px",
                    objectFit: "cover",
                  }}
                />
                <div className="our-menu-col">
                  <div className="heading">
                    <h3 className="bold-color">{category.Nama_Kategori}</h3>
                  </div>
                  <div className="body">
                    {filteredMenuData.map((item, itemIndex) => (
                      <div className="menu-item" key={itemIndex}>
                        <h5 className="bold-color">
                          <Link href="shop-single.html">{item.Nama_Menu}</Link>
                          <span className="dots"></span>
                          <span className="price">
                            <span>Rp</span>{" "}
                            {item.Harga.toLocaleString("id-ID", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </span>
                        </h5>

                        <ul>
                          <li>
                            <Link href="#">{item.Bahan}</Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                    <Link to={"/menu"} className="au-btn__readmore">
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
