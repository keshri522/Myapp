import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "../Css/Counts.css";
import $ from "jquery";
// import img30 from "../Images/CB.png";
import img31 from "../Images/CC.png";
// import img32 from "../Images/CD.png";
function Counts() {
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
      <section id="slider">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-none d-md-block"></div>

              <img src={img31} className="d-block w-100" alt="..." />
            </div>
            {/* <div className="carousel-item" data-bs-interval="1000">
              <img src={img30} className="d-block w-100" alt="..." />

              <div className="carousel-caption d-none d-md-block">
             

      
              </div>
            </div> */}
            /
            {/* <button
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
          </button> */}
          </div>
        </div>
      </section>

      <section id="Con">
        <div className="head">
          <h2>SERVICES</h2>
        </div>
        <div className="row row-cols-md-3 g-3">
          <div className="col-sm-12">
            <div className="cardU">
              <div className="cardU-body">
                <h5 className="cardU-title">Permanent Staffing</h5>
                <p className="cardU-text">
                  As a specialized firm, we have played a crucial role in
                  discovering individuals for unique roles, establishing a
                  robust talent reservoir, and fostering meaningful interactions
                  with them.
                </p>
                <h6>
                  <a href="/CountR">Read More</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="cardU">
              <div className="cardU-body">
                <h5 className="cardU-title">Contract Staffing</h5>
                <p className="cardU-text">
                  We provide flexible contract staffing, ensuring smooth client
                  operations with a focus on high employee engagement, valuing
                  our contract staff as invaluable assets.{" "}
                </p>
                <h6>
                  <a href="/CountR">Read More</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="cardU">
              <div className="cardU-body">
                <h5 className="cardU-title">Campus Recruitment</h5>
                <p className="cardU-text">
                  We work closely with new graduates for smooth onboarding,
                  offering comprehensive recruitment solutions and strong ties
                  with educational institutions.
                </p>
                <h6>
                  <a href="/CountR">Read More</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="counter">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <span className="counter-value">233</span>
                <h3>Register</h3>
              </div>
            </div>

            <div className="col-md-2 col-sm-3">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <span className="counter-value">220</span>
                <h3>ShortListed</h3>
              </div>
            </div>

            <div className="col-md-2 col-sm-3">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <span className="counter-value">233</span>
                <h3>Bucket</h3>
              </div>
            </div>

            <div className="col-md-2 col-sm-3">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <span className="counter-value">220</span>
                <h3>interviewd</h3>
              </div>
            </div>

            <div className="col-md-2 col-sm-3">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <span className="counter-value">233</span>
                <h3>Selected</h3>
              </div>
            </div>

            <div className="col-md-2 col-sm-3">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <span className="counter-value">220</span>
                <h3>Hired</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="job">
        <div className="job3">
          <h2>Carrier Solutions</h2>
        </div>
        <div class="job2">
          <input
            type="text"
            id="myInput"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              myFunction();
            }}
            placeholder="Search for names.."
          />
          <button type="button" class="btn btn-primary me-3">
            Primary
          </button>
        </div>

        <table id="myTable">
          <thead>
            <tr className="header">
              <th>Job</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Goa</td>
            </tr>
            <tr>
              <td>Berglunds snabbkop</td>
              <td>Mumbai</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Bengaluru</td>
            </tr>
            <tr>
              <td>Koniglich Essen</td>
              <td>Delhi</td>
            </tr>
          </tbody>
        </table>
      </section> */}

      <section id="testimonials">
        <div className="testheader">
          <h2>Testimonials</h2>
        </div>
        {/* <!-- Carousel wrapper --> */}
        <div
          id="carouselMultiItemExample"
          class="carousel slide carousel-dark text-center"
          // data-mdb-ride="carousel"     // changed//////////////////////////////////////
        >
          {/*--------------------------------- changes in this section -------------------- */}
          {/* <!-- Controls --> */}
          <div class="d-flex justify-content-center mb-4">
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMultiItemExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselMultiItemExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/*------------------------ changes end--------------------------- */}
          {/* <!-- Inner --> */}
          <div class="carousel-inner py-4">
            {/* <!-- Single item --> */}
            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    {/* <img
                      class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      alt="avatar"
                    /> */}
                    <h5 class="mb-3">Kajal Singh</h5>
                    <p>Web Designer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Summarize my overall experience with the web designer or
                      sankhyana company. Include any recommendations or areas
                      for improvement. End on a positive note if you were
                      satisfied with the collaboration.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <h5 class="mb-3">Ketan Pradip Vaghunde</h5>
                    <p>Sas Developer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      The candidate's commitment to continuous learning and
                      innovation makes them a valuable asset to the team. With
                      targeted improvements, they have the potential to
                      contribute significantly as a SAS Developer in our
                      organization.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star-half-alt fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <h5 class="mb-3">Ketan Kamble</h5>
                    <p>Data Science Engineer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      The Data Science Engineer exhibits strong technical
                      skills, problem-solving, and collaboration. With a
                      commitment to continuous learning and strategic
                      improvements, they have the potential to play a key role
                      in advancing our data science capabilities.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="far fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <h5 class="mb-3">Muzaffer Ali</h5>
                    <p>Full Stack Developer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      The Full Stack Development team consistently delivers
                      high-quality solutions with strong collaboration and
                      problem-solving skills. Focused on continuous learning,
                      innovation, and process refinement, they maintain a
                      leading edge in the rapidly evolving field of full stack
                      development.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <h5 class="mb-3">Saumya Bhatam</h5>
                    <p>Digital Marketing</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      The company excels in digital marketing across channels.
                      By addressing areas for improvement and staying agile in
                      the evolving digital landscape, it can enhance its online
                      presence and achieve meaningful results.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star-half-alt fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <h5 class="mb-3">Sonu Rathor</h5>
                    <p>Django Developer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      The Django team excels in delivering high-quality
                      solutions with strong collaboration and problem-solving
                      skills. Their focus on continuous learning, innovation,
                      and process refinement positions them to maintain a
                      leading edge in Django development.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="far fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single item --> */}
            {/* <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <h5 class="mb-3">Anna Deynah</h5>
                    <p>UX Designer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
               
                    <h5 class="mb-3">John Doe</h5>
                    <p>Web Developer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star-half-alt fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                 
                    <h5 class="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="far fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Counts;
