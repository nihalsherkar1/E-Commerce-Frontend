import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to={"/"}>
            <i class="fa-solid fa-dumpster mx-2"></i> E-Commerce
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
                  <i class="fa-solid fa-user-plus mx-2"></i>Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="#" to={"/login"}>
                  <i class="fa-solid fa-right-to-bracket mx-2"></i>Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="#" to={"/addproduct"}>
                  <i class="fa-solid fa-plus mx-1"></i> Add Product
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" href="#" to={"/product"}>
                  <i class="fa-solid fa-pen-to-square"></i> Edit Products
                </Link>
              </li>
            </ul>
            {/* Move the cart icon to the end of the navbar */}
            <div className="ms-auto mx-5">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active fs-lg" href="#" to={"/cart"}>
                    <i className="fa-solid fa-cart-shopping text-light fa-lg "></i>{" "}
                    Cart
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

export default Navbar;
