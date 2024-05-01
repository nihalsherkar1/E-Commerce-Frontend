import React from "react";
import image1 from "../Images/mobile1.jpg";
import image2 from "../Images/earbud.jpg";
import image3 from "../Images/bottle.jpg";

const MyCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner container">
          <div class="carousel-item active ">
            <img
              src={image1}
              class="d-block w-100"
              alt="..."
              style={{ height: "29rem" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={image2}
              class="d-block w-100"
              alt="..."
              style={{ height: "29rem" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={image3}
              class="d-block w-100"
              alt="..."
              style={{ height: "29rem" }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;
