import React, { useEffect, useState } from "react";
import "../Css/About.css";
import $ from "jquery";
import img14 from "../Images/zip1.png";
import img15 from "../Images/images (1)vi2.jpg";
import img30 from "../Images/T1.png";
import img31 from "../Images/T2.png";
import img32 from "../Images/T3.png";
import histri from "../Images/histo.jpg";
import mission from "../Images/mission2.jpg";
// import img29 from "../Images/About6.png";
// import { useState, useEffect } from "react";

function About() {
  // ***********************this code for scroll event
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animation");

    const handleScroll = () => {
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();

        if (elementPosition.top < window.innerHeight) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Use jQuery inside the useEffect to ensure the DOM is ready
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }, []);

  const [filter, setFilter] = useState("");

  function myFunction() {
    const input = filter.toLowerCase();
    const table = document.getElementById("myTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toLowerCase().indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <>
      <section className="Lean">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Creating Value,Delivering Excellence.</h5>
                <button type="button" class="btn btn-primary">
                  Explore
                </button> */}
              </div>

              <img src={img31} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img src={img30} className="d-block w-100" alt="..." />

              <div className="carousel-caption d-none d-md-block">
                {/* <h5>find here the best counsulting service here</h5>
                <button type="button" class="btn btn-primary">
                  Explore
                </button> */}

                {/* <p>
                  Some representative placeholder content for the first slide.
                // </p> */}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img src={img32} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Driving Your Business Forward with Sankhayna</h5>
                <button type="button" class="btn btn-primary">
                  Explore
                </button> */}
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

      <div className="photo">
        <div class="text ">
          {/* <div class="scroll-animation enter-from-right animate"> */}{" "}
          {/* Add class name for applying animation on this section */}
          <h2> Sankhyana Advantages</h2>
          <img src={img14} alt="" />
          {/* </div>{" "} */}
          {/*------------------- section end -----------------------*/}
          <div class="scroll-animation enter-from-left animate">
            {" "}
            {/* ---------- another setion-------------- */}
            <p align="centre">
              We believe in power of analytics and trust in “Data Driven
              Decision Science” which enables enterprises to transcend complex
              business problems. We have a specialized analytics team of data
              engineers, data scientists, statisticians & data analysts with a
              blend of young and experienced pool of knowledge with the very
              latest analytics software and are capable of catering to diverse
              sectors.
            </p>
            <br />
            <h5>{/* <a href="#">Learn More.......</a> */}</h5>
          </div>{" "}
          {/* ------------------section end--------- */}
        </div>
      </div>

      <div className="P_1">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="M-2">
              {/* <div class="scroll-animation enter-from-left animate"> */}
              <img src={img15} alt="" />
              {/* </div> */}
            </div>
          </div>
          <div class="col-md-8 col-sm-12">
            {/* <div class="scroll-animation tada animate" data-aos="fade-down"> */}
            <div className="history">
              <p align="centre">
                <h2>Our History</h2>
              </p>
              <p align="centre">
                <h4>9+ years of analytics innovation</h4>
              </p>
              <p align="centre">
                It all started with curious minds. Is there a better way to
                analyze data? How can we turn data into intelligence? Who will
                benefit from using our technology? With a passion for analytics,
                our founders saw lines of code as the key to something
                extraordinary. Fast forward more than four decades later, and
                SAS has thousands of employees and customers in locations
                worldwide, analyzing billions of rows of data every second that
                are changing how we live.
              </p>
              <h6>{/* <a href="#">Read More....</a> */}</h6>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* 
      ------------------------------------------------------- */}
      <div className="P_1">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {/* <div className="scroll-animation tada animate" data-aos="fade-down"> */}
            <div className="history">
              <p align="centre">
                <h2>Vision</h2>
              </p>

              <p align="centre">
                The vision of our analytics consultancy is to lead the industry
                by empowering organizations through data excellence. We aspire
                to drive client success by delivering unparalleled insights and
                data-driven strategies. Committed to innovation and leadership,
                we envision a future where our pioneering approach to data
                transforms businesses globally, setting new standards for
                precision in analytical insights. Rooted in collaboration and
                partnership, we strive to be the trusted ally that enables
                informed decision-making and brings about positive, lasting
                change for our clients.
              </p>
              <h6></h6>
            </div>
            {/* </div> */}
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="M-2">
              {/* <div className="scroll-animation enter-from-left animate"> */}
              <img src={img15} alt="" className="img-vission" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="P_1">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="M-2">
              {/* <div className="scroll-animation enter-from-left animate"> */}
              <img src={mission} alt="" className="img-vission" />
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            {/* <div className="scroll-animation tada animate" data-aos="fade-down"> */}
            <div className="history">
              <p align="centre">
                <h2>Mision</h2>
              </p>

              <p align="centre">
                The mission of our analytics consultancy is to harness the power
                of data to drive meaningful and actionable insights for our
                clients. Committed to excellence, we aim to provide cutting-edge
                analytics solutions that empower organizations to make informed
                decisions, optimize performance, and achieve their strategic
                goals. Our mission is rooted in a dedication to accuracy,
                innovation, and client satisfaction. We strive to continually
                advance our expertise, leveraging the latest technologies and
                methodologies to stay at the forefront of the analytics
                landscape.
              </p>
              <h6>{/* <a href="#">Read More....</a> */}</h6>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* <!-- Gallery --> */}
      {/* <section className="Gallery">
          {/* ... gallery code ... */}
      {/* </section> */}
      {/* <!-- Gallery --> */}
    </>
  );
}

export default About;
