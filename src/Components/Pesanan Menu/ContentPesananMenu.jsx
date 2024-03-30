import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import JsBarcode from "jsbarcode";
export default function ContentPesananMenu() {
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

  function calculateTotal() {
    return cartItems.reduce((total, item) => {
      const menu = menuData.find((menu) => menu.ID_Menu === item.menuId);
      return total + (menu ? menu.Harga * item.quantity : 0);
    }, 0);
  }

  const handleSubmit = async () => {
    const ID_Pesanan = localStorage.getItem("ID_Pesanan");
    const ID_Menu = cartItems.map((item) => item.menuId);
    const Jumlah = cartItems.map((item) => item.quantity);

    try {
      const confirmed = await confirmOrder();
      if (confirmed) {
        const response = await axios.post(`${apiUrl}menu-pesanans`, {
          ID_Pesanan,
          ID_Menu,
          Jumlah,
        });
        console.log("Data sent successfully:", response.data);
        localStorage.removeItem("cartItems");
        Swal.fire({
          title: "Success",
          text: "Order placed successfully",
          icon: "success",
        });

        // Cetak ke PDF setelah konfirmasi
        printToPDF();
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const confirmOrder = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to confirm this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    });
    return result.isConfirmed;
  };

  const printToPDF = () => {
    const input = document.getElementById("order_review");
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Add information for cashier
      pdf.setFontSize(12);
      pdf.text(10, pageHeight - 20, "Silahkan bawa ke kasir untuk pembayaran");

      // Generate barcode
      const barcodeData = "123456789"; // Sample barcode data
      const barcodeMarginTop = pageHeight - 40;
      JsBarcode(pdf, barcodeData, {
        format: "CODE128",
        displayValue: false,
        marginTop: barcodeMarginTop,
      });

      // Save PDF
      pdf.save("order.pdf");
    });
  };

  return (
    <section className="checkout-page section-primary pt-120">
      <div className="container">
        <div className="woocommerce">
          <form method="get" className="checkout woocommerce-checkout">
            <div className="row">
              <div className="col-md-12">
                <div className="woocommerce-checkout-review-order-wrap">
                  <h5 id="order_review_heading">Your order</h5>
                  <div
                    id="order_review"
                    className="woocommerce-checkout-review-order"
                  >
                    <table className="shop_table woocommerce-checkout-review-order-table">
                      <tbody>
                        {cartItems.map((cartItem) => {
                          const menu = menuData.find(
                            (menu) => menu.ID_Menu === cartItem.menuId
                          );
                          if (!menu) return null;
                          return (
                            <tr key={menu.ID_Menu} className="cart_item">
                              <td className="product-name">
                                <img
                                  src={`http://localhost:8000/images/${menu.ImageMenu}`}
                                  alt=""
                                  style={{
                                    width: "91px",
                                    height: "80px",
                                    objectFit: "cover",
                                  }}
                                />
                                <div className="review-wrap">
                                  <span className="rv-titel">
                                    {menu.Nama_Menu}
                                  </span>
                                  <span className="product-quantity">
                                    x{cartItem.quantity}
                                  </span>
                                </div>
                              </td>
                              <td className="product-total">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    Rp{" "}
                                  </span>
                                  {menu.Harga * cartItem.quantity}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="cart-total">
                      <div className="order-total">
                        <p>
                          <span className="title">Total</span>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              Rp{" "}
                            </span>
                            {calculateTotal()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button
            onClick={handleSubmit}
            className="button alt au-btn round has-bg"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}
