import React from "react";
// import imgA from "../Images/5.png";
// import imgB from "../Images/6.png";
// import imgC from "../Images/7.png";
import "../Css/Slider.css";
function About() {
  return (
    <>
      <section className="testing">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-none d-md-block">
                <h5>Creating Value,Delivering Excellence.</h5>
                <button type="button" class="btn btn-primary">
                  Explore
                </button>
              </div>

              {/* <img src={imgA} className="d-block w-100" alt="..." /> */}
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              {/* <img src={imgB} className="d-block w-100" alt="..." /> */}
              <div className="carousel-caption d-none d-md-block">
                <h5>find here the best counsulting service here</h5>
                <button type="button" class="btn btn-primary">
                  Explore
                </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              {/* <img src={imgC} className="d-block w-100" alt="..." /> */}
              <div className="carousel-caption d-none d-md-block">
                <h5>Driving Your Business Forward with Sankhayna</h5>
                <button type="button" class="btn btn-primary">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
export default About;
