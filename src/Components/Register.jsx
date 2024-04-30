import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
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
      const response = await axios.post(
        `http://localhost:8080/user/register`,
        data,
        {
          params: {
            role: data.role,
          },
        }
      );

      setTimeout(() => {
        setMsg("User added successfully.....");
        window.location.reload();
      }, 1000);

      console.log("User registerd successfully: ", response.data);

      //CLear form field after successful registration
      setData({
        username: "",
        email: "",
        password: "",
        role: "USER",
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <div className="container  " style={{ marginTop: "7rem" }}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 shadow">
            <div className="card-body">
              <div className="card-header   mb-5 mt-2">
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                <h3 className="text-uppercase ">Register</h3>
              </div>
              <form action="" onSubmit={handleSubmit}>
                {/* Username */}
                <div className="pt-1 d-flex mt-2">
                  <label
                    htmlFor=""
                    className="card-body text-uppercase fs-6  fw-bold"
                  >
                    Username
                  </label>
                  <input
                    className="card-body form-control"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    onChange={handleChange}
                    value={data.username}
                  />
                </div>
                {/* EMail */}
                <div className="pt-1 d-flex mt-2">
                  <label
                    htmlFor=""
                    className="card-body text-uppercase fs-6 fw-bold "
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
                    htmlFor=""
                    className="card-body text-uppercase fs-6 fw-bold"
                  >
                    Password
                  </label>
                  <input
                    className="card-body form-control"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                    value={data.password}
                  />
                </div>
                <div>
                  <button className="btn btn-primary p-2 m-4 col-md-6 shadow">
                    Sign Up
                  </button>
                  <br />
                  <span>
                    If you have alrady account ?
                    <Link
                      to={"/login"}
                      style={{ textDecoration: "none" }}
                      className="mx-2"
                    >
                      SignIn
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

export default Register;
