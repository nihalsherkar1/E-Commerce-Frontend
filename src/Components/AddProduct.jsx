import React, { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const [data, setData] = useState({
    productname: "",
    price: "",
  });

  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/products/add",
        data
      );

      setTimeout(() => {
        setMsg("product added successfully.....");
        window.location.reload();
      }, 1000);

      console.log("User registerd successfully: ", response.data);

      //CLear form field after successful registration
      setData({
        productname: "",
        price: "",
      });
    } catch (error) {
      console.error("Error  :", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6  offset-md-3  ">
            <div className="card bg-light shadow">
              <div className="card-header fs-3 text-center text-uppercase fw-bold ">
                Add Product
              </div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="">Prduct Name</label>
                    <input
                      type="text"
                      id="productname"
                      name="productname"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Enter Product Name"
                      value={data.productname}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Price</label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Enter Price"
                      value={data.price}
                    />
                  </div>

                  <button className="btn btn-danger rounded col-md-12 mb-3 mt-4">
                    Add Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
