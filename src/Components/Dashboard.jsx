import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";

const Dashboard = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products/all");
        console.log("Response: ", response.data);

        setProductList(response.data);
        setLoading(false); // Data fetched, loading complete
      } catch (error) {
        console.error(error);
        setLoading(false); // Error occurred, loading complete
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/products/${id}`
      );

      if (response) {
        setMsg("Product deleted successfully.");

        // Reload page after delete
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Show loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show an empty state message if there are no products
  if (productList.length === 0) {
    return <p>No Products Found</p>;
  }

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/cart/add/${productId}/${userId}`,
        {
          productId,
        }
      );
      setMsg("Product added to cart successfully.");
      setShowMsg(true);
      console.log(response.data);

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("Error adding product to cart: ", error);
      setMsg("Failed to add product to cart.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {showMsg && <p className="fs-4 text-center text-success">{msg}</p>}
        <div className="card-header fs-4 fw-bold text-uppercase text-center mb-3">
          Product
        </div>
        {productList.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  Product Name: {product.productname}
                </h5>
                <p className="card-text">Price: {product.price}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-dark mx-2">
                  <Link
                    className="text-light"
                    to={"/"}
                    style={{ textDecoration: "none" }}
                    onClick={() => addToCart(product.id)}
                  >
                    Add To Cart
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
