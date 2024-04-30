import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/user/login?email=${data.email}&password=${data.password}`
      );
      console.log("RESPONSE:", response);
      if (response.data) {
        // Extract user ID from the response data
        const userId = response.data.id;
        const userRole = response.data.role;

        console.log("USER ID:", userId);

        console.log("Role: ", userRole);
        // Save user ID to local storage
        localStorage.setItem("userId", userId);

        // Navigate to the home page

        // if (userRole === "user") {
        //   navigate("/");
        // } else {
        //   navigate("/login");
        // }

        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  return (
    <div>
      <div className="container mb-5" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 shadow">
            <div className="card-body">
              <div className="card-header mb-5 mt-2">
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                <h3 className="text-uppercase">Login</h3>
              </div>
              <form action="" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="pt-1 d-flex ">
                  <label
                    htmlFor="email"
                    className="card-body text-uppercase fs-6 fw-bold"
                    style={{ marginRight: "2.4rem" }}
                  >
                    Email
                  </label>
                  <input
                    className="card-body form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={data.email}
                  />
                </div>
                {/* Password */}
                <div className="pt-1 d-flex mt-2">
                  <label
                    htmlFor="password"
                    className="card-body text-uppercase fs-6 fw-bold"
                  >
                    Password
                  </label>
                  <input
                    className="card-body form-control"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={data.password}
                  />
                </div>
                <div>
                  <button className="btn btn-primary p-2 m-4 col-md-6 shadow mybtn">
                    Sign In
                  </button>
                  <br />
                  <span>
                    If you have alrady account ?
                    <Link
                      to={"/register"}
                      style={{ textDecoration: "none" }}
                      className="mx-2"
                    >
                      Register
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
