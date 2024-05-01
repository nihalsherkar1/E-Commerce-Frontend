import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted bg-dark text-light  ">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block text-light">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="text-light">
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="text-light">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    ELECTROMICS
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    HOME APPLIANCES
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    SPORTS
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    CLOTHING
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p className="">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    CAREER
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    ABOUT US
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    ORDER
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    HELP
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Maharashtra, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  ecommerce@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 91 8806345522
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 91 9359548230
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 text-light"
          style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a
            className="text-reset fw-bold mx-2"
            href="# "
            style={{ textDecoration: "none" }}
          >
            E-COMMERCE
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
