import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

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
        setAlertMsg("Product deleted successfully.");
        setShowAlert(true);

        // Reload page after delete
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  // Show loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show an empty state message if there are no products
  if (productList.length === 0) {
    return <p>No Products Found</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {msg && <p className="fs-4 text-center text-success">{msg}</p>}
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {alertMsg}
          </Alert>
        )}
        {productList.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-header fs-5 text-center">Product</div>
              <div className="card-body">
                <h5 className="card-title">
                  Product Name: {product.productname}
                </h5>
                <p className="card-text">Price: {product.price}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary mx-2">
                  <Link
                    className="text-light"
                    to={"/edit/" + product.id}
                    style={{ textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
