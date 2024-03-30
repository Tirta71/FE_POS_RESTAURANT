/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Menu.css";

export default function KategoriMenu({ onCategoryClick }) {
  const [kategoriMenus, setKategoriMenus] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchKategoriMenus = async () => {
      try {
        const response = await axios.get(`${apiUrl}kategori-menus`);
        const kategoriMenusWithCounts = await Promise.all(
          response.data.map(async (kategori) => {
            const count = await countMenusByCategory(kategori.ID_Kategori);
            return { ...kategori, jumlah: count };
          })
        );
        setKategoriMenus(kategoriMenusWithCounts);
      } catch (error) {
        console.error("Error fetching kategori menu data:", error);
      }
    };

    fetchKategoriMenus();
  }, []);

  const countMenusByCategory = async (kategoriId) => {
    try {
      const response = await axios.get(`${apiUrl}menus`);
      const filteredMenus = response.data.filter(
        (menu) => menu.ID_Kategori === kategoriId
      );
      return filteredMenus.length;
    } catch (error) {
      console.error("Error counting menu data for category:", error);
      return 0;
    }
  };

  const handleCategoryClick = (kategoriId) => {
    onCategoryClick(kategoriId);
    setActiveCategory(kategoriId);
  };

  return (
    <div className="widgets widget_categories">
      <div className="widget-title">
        <h5>Categories</h5>
      </div>
      <ul>
        {kategoriMenus.map((kategori) => (
          <li key={kategori.ID_Kategori}>
            <a
              className={
                activeCategory === kategori.ID_Kategori
                  ? "category-link active"
                  : "category-link"
              }
              onClick={() => handleCategoryClick(kategori.ID_Kategori)}
              style={{ cursor: "pointer" }}
            >
              {kategori.Nama_Kategori} (<span>{kategori.jumlah}</span>)
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
