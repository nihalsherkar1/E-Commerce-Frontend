import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "./Products";
import productService from "../service/product.service";

const EditProduct = () => {
  const [data, setData] = useState({
    productname: "",
    price: "",
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/products/${id}`,
        data
      );
      setTimeout(() => {
        setMsg("product Updated successfully.....");
        // window.location.reload();
        navigate("/product");
      }, 500);

      console.log("User registerd successfully: ", response.data);

      //CLear form field after successful registration
      setData({
        productname: "",
        price: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { id } = useParams();

  console.log("ID: ", id);

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6  offset-md-3  ">
            <div className="card bg-light shadow">
              <div className="card-header fs-3 text-center">Edit Product</div>
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

                  <button className="btn btn-danger rounded col-md-12">
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

export default EditProduct;
