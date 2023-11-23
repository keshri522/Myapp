import React from "react";
import "../Css/Learn.css";
import sas from "../Images/sas.png";
import ds from "../Images/ds.png";
import fs from "../Images/fs.png";
import ins from "../Images/in.png";

import img20 from "../Images/video-blogger.png";
import img21 from "../Images/live-chat.png";
import img22 from "../Images/classroom.png";

import img40 from "../Images/bt1.png";

function Learn() {
  return (
    <>
      <section id="slides">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-none d-md-block"></div>

              <img src={img40} className="d-block w-100" alt="..." />
            </div>
            {/* <div className="carousel-item" data-bs-interval="">
              <img src={img41} className="d-block w-100" alt="..." />

              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item" data-bs-interval="">
              <img src={img42} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
            </div> */}
          </div>
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
      </section>

      <section className="train">
        <div className="Learn_3">
          <div className="text_9">
            <p class="col-md-4 col-sm-12">
              <div class="row">
                {" "}
                {/* adding row for dividing sections into col  */}
                <div class="col-12 col-md-6 order-2 order-md-1">
                  {" "}
                  {/* first col- puting content and button in this col  */}
                  <h2>SAS Courses</h2>
                  SAS Courses typically cover a wide array of topics, including
                  data manipulation, statistical techniques, machine learning,
                  and data visualization using SAS software. Whether you're
                  looking to kickstart your career in data analytics, enhance
                  your statistical skills, or become a certified SAS
                  professional, these courses offer a valuable learning
                  experience. With a blend of theory and hands-on practice,
                  participants gain the expertise to make data-driven decisions,
                  solve complex business problems, and extract meaningful
                  insights from data using SAS.
                  <br />
                  <br />
                  <br />
                  <p class="text-center float-md-start m-0">
                    {" "}
                    {/* adding p tag for for center alignment of button on small device and left on larger device */}
                    <div
                      class="btn-group "
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-secondary">
                        <a href="/Count">More</a>
                      </button>
                    </div>
                  </p>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2">
                  {" "}
                  {/* sec col - puting image only */}
                  <img src={sas} alt="" />
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      <section className="train">
        <div className="Learn_3">
          <div className="text_9">
            <p class="col-md-4 col-sm-12">
              <div class="row">
                {" "}
                {/* same change according to view */}
                <div class="col-12 col-md-6 ">
                  <img src={ds} alt="" />
                </div>
                <div class="col-12 col-md-6">
                  <h2>Data Science</h2>
                  Data Science Courses provide a comprehensive education in the
                  rapidly growing field of data science. Data science is an
                  interdisciplinary domain that combines knowledge from
                  statistics, computer science, mathematics, and domain
                  expertise to analyze and derive valuable insights from data.
                  These courses are designed to equip individuals with the
                  skills and knowledge needed to work with large datasets,
                  develop predictive models, and make data-driven decisions.
                  <br />
                  <br />
                  <br />
                  <p class="text-center float-md-start m-0">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-secondary">
                        <a href="/Intd">More</a>
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      <section className="train">
        <div className="Learn_3">
          <div className="text_9">
            <p className="col-md-4 col-sm-12">
              <div class="row">
                {" "}
                {/* same change */}
                <div class="col-12 col-md-6 order-1  order-md-2">
                  <h3> Full Stack Developer</h3>
                  <p align="justify">
                    Full Stack Developer courses offer comprehensive training to
                    individuals who aspire to become proficient in both
                    front-end and back-end web development. Full Stack
                    Developers are capable of working on all aspects of a web
                    application, from designing the user interface to managing
                    server-side databases and server deployment. These courses
                    provide a well-rounded education in various programming
                    languages, frameworks, and tools commonly used in web
                    development.
                  </p>
                  <br />
                  <br />
                  <br />
                  <p class="text-center float-md-start m-0">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-secondary">
                        <a href="/Intf">More</a>
                      </button>
                    </div>
                  </p>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2">
                  <img src={fs} alt="" />
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      <section className="train">
        <div className="Learn_3">
          <div className="text_9">
            <p class="col-md-4 col-sm-12">
              <div class="row">
                {" "}
                {/* same change */}
                <div class="col-12 col-md-6">
                  <img src={ins} alt="" />
                </div>
                <div class="col-12 col-md-6">
                  <h2>Internship</h2>
                  Internship courses are designed to provide students or
                  individuals with valuable hands-on work experience in a
                  specific field or industry. These courses combine academic
                  learning with practical work, allowing participants to apply
                  their knowledge in a real-world context.Internship courses aim
                  to bridge the gap between academic learning and the skills
                  needed in the professional world. They provide an opportunity
                  for students to gain practical experience, explore potential
                  career paths, and develop a network of professional contacts.
                  <br />
                  <br />
                  <br />
                  <p class="text-center float-md-start m-0">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-secondary">
                        <a href="/Intr">More</a>
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="card-deck row">
          <div class="col-xs-6 col-sm-3 col-md-4">
            <div class="card">
              <div class="view overlay">
                <img src={img20} alt="" />
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title">Free Demo</h4>
                <p class="card-text">
                  Discover the future of possibilities with our cutting-edge
                  solution – experience it firsthand with our free demo. Elevate
                  your journey, no strings attached.
                </p>
                {/* <button type="button" class="btn btn-light-blue btn-md">Read more</button> */}
              </div>
            </div>
          </div>

          <div class="col-xs-6 col-sm-3 col-md-4">
            <div class="card mb-4">
              <div class="view overlay">
                <img src={img21} alt="" />
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title">Live Web</h4>
                <p class="card-text">
                  Step into the future live on the web: explore our
                  groundbreaking solution with a free demo. Unleash innovation
                  instantly, no cost, just click and experience."
                </p>
                {/* <button type="button" class="btn btn-light-blue btn-md">Read more</button> */}
              </div>
            </div>
          </div>

          <div class="col-xs-6 col-sm-3 col-md-4">
            <div class="card mb-2">
              <div class="view overlay">
                <img src={img22} alt="" />
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title">Classroom</h4>
                <p class="card-text">
                  Transform your classroom experience effortlessly – join our
                  live demo for free. Discover a new era of interactive learning
                  without any cost or commitment.
                </p>
                {/* <button type="button">Read more</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Learn;
