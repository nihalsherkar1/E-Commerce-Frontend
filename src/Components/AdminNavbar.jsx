import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to={"/"}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  to={"/register"}
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to={"/addproduct"}>
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to={"/product"}>
                  Products
                </Link>
              </li>
            </ul>
            {/* Move the cart icon to the end of the navbar */}
            <div className="ms-auto mx-5">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="#" to={"/cart"}>
                    <i className="fa-solid fa-cart-shopping text-light fa-lg"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
