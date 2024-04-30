import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/cart/${userId}`
        );

        console.log("Response Data: " + typeof response.data);
        setCartItems(Object.values(response.data)); // Convert object to array

        setLoading(false);
      } catch (error) {
        setError("Error fetching cart items.");
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userId]);

  if (loading) {
    return <p>Loading cart items...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4 text-uppercase">Cart List</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="container">
          <div className=" border  p-3 shadow">
            <div className="row">
              <div className=" ">
                <div className=" ">
                  <table className="table">
                    <thead>
                      <tr className="text-uppercase table-dark">
                        <th>Product Name</th>
                        <th>Price</th>
                        {/* Add more columns as needed */}
                      </tr>
                    </thead>
                    <tbody className="">
                      {cartItems.map((item) => (
                        <tr
                          key={item.id}
                          className="p-3 mt-2 mb-2 fw-bold fs-5"
                        >
                          <td>{item.productName}</td>
                          <td>{item.price}</td>
                          {/* Render more columns as needed */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
