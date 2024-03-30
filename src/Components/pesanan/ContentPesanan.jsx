import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContentPesanan() {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleTableNumberChange = (e) => {
    setTableNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}pelanggan`, {
        Nama_Pelanggan: customerName,
        Nomor_Meja: tableNumber,
      });

      const pesanan = await axios.post(`${apiUrl}pesanan`, {
        ID_Pelanggan: response.data.pelanggan.ID_Pelanggan,
      });

      const ID_Pesanan = pesanan.data.pesanan.ID_Pesanan;
      const ID_Pelanggan = response.data.pelanggan.ID_Pelanggan;

      localStorage.setItem("ID_Pelanggan", ID_Pelanggan);
      localStorage.setItem("ID_Pesanan", ID_Pesanan);
      Swal.fire({
        title: "Success",
        text: "Data Successfully Created",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/menu-pesanan";
        }
      });
    } catch (error) {
      console.error("Error creating customer:", error);
      Swal.fire({
        title: "Error",
        text: "Table not available",
        icon: "error",
      });
    }
  };

  return (
    <section className="checkout-page section-primary pt-120">
      <div className="container">
        <div className="woocommerce">
          <form
            onSubmit={handleSubmit}
            className="checkout woocommerce-checkout"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="woocommerce-billing-fields">
                  <h5>Customer Details</h5>
                  <div className="woocommerce-billing-fields__field-wrapper">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="form-row form-row-first validate-required">
                          <label htmlFor="billing_first_name">
                            Name
                            <span className="required" title="required">
                              *
                            </span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder="Input your name"
                            value={customerName}
                            onChange={handleCustomerNameChange}
                            required
                          />
                        </p>
                        <p className="form-row form-row-first validate-required">
                          <label htmlFor="billing_table_number">
                            No Table
                            <span className="required" title="required">
                              *
                            </span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="billing_table_number"
                            id="billing_table_number"
                            placeholder="Input your table number"
                            value={tableNumber}
                            onChange={handleTableNumberChange}
                            required
                          />
                        </p>

                        <button
                          type="submit"
                          className="au-btn go-shopping round has-bg au-btn--hover"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
