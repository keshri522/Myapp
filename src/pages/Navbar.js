import React, { useEffect } from "react";
import "../Css/Navbar.css";
import img2 from "../Images/hero-img.svg";
import img3 from "../Images/about-img.svg";
import img4 from "../Images/counts-img.svg";
import img6 from "../Images/Axis.png";
import img7 from "../Images/b.png";
import img8 from "../Images/icici.jpg";
import img9 from "../Images/ORBIS_logo.png";
import img10 from "../Images/P.jpg";
import img11 from "../Images/R_logo.webp";
import img12 from "../Images/Airtel.png";
import img13 from "../Images/L.png";
import img16 from "../Images/education-podcast.png";
import img17 from "../Images/team.png";
import img18 from "../Images/diploma.png";

function Navbar() {
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

  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" class="clearfix">
        <div
          class="scroll-animation enter-from-down animate"
          data-aos="fade-down"
        >
          <div class="container">
            <div class="hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={img2} alt="" class="img-fluid" />
            </div>
            <div class="hero-info" data-aos="zoom-in" data-aos-delay="100">
              <div
                class="scroll-animation enter-from-up animate"
                data-aos="fade-up"
              >
                <h2 id="tagline">
                  We provide
                  <br />
                  <span>solutions</span>
                  <br />
                  for your business!
                </h2>
                <div>
                  <a href="/support" class="btn-services scrollto">
                    Get Started
                  </a>
                  <a href="#services" class="btn-services scrollto">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Hero Section */}

      {/* ======= About Section ======= */}
      <section id="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <div class="scroll-animation enter-from-left animate">
              <h3>About Us</h3>
            </div>
          </div>
          <div className="row about-container">
            <div className="col-lg-6 content order-lg-1 order-2">
              <div class="scroll-animation enter-from-left animate">
                <p>
                  'Sankhyana' in Sanskrit means 'Numeration' which in-turn means
                  the process or action of calculating by assigning numbers to
                  something. At Sankhyana Consultancy Services we visualize
                  business scenarios by assigning numbers and then use relevant
                  Statistical Models to glean out meaningful and actionable
                  insights enabling businesses to take data-driven decisions.
                </p>
              </div>

              <div class="scroll-animation enter-from-left animate">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <i className="fa-regular fa-sun fa-2xl"></i>
                  </div>
                  <h4 className="title">
                    <a href>Our Programs</a>
                  </h4>
                  <p className="description">
                    Our Programs Are Designed To Empower Individuals To Meet
                    Industry Demands, Fuel Enthusiasm For Higher Education And
                    Professional Training.
                  </p>
                </div>
              </div>
              <div class="scroll-animation enter-from-left animate">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <i className="fa-regular fa-square-check fa-2xl"></i>
                  </div>
                  <h4 className="title">
                    <a href>Assist Organizations</a>
                  </h4>
                  <p className="description">
                    We Provide a wide Range Of Opportunities To Assist
                    Organizations Obtain Meaningful And Actionable Analytical
                    Insights From Their Data.
                  </p>
                </div>
              </div>
              <div class="scroll-animation enter-from-left animate">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon">
                    <i className="fa-regular fa-calendar-days fa-2xl"></i>
                  </div>
                  <h4 className="title">
                    <a href>Solve</a>
                  </h4>
                  <p className="description">
                    We Solve Both Complex And Basic Data Analysis Problems Using
                    Best Of Breed Human Resources And Statistical Packages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
              <div class="scroll-animation enter-from-right animate">
                <img src={img3} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* secondary about section */}
      <section id="counts" class="counts">
        <div class="scroll-animation zoom-in animate" data-aos="fade-down">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 aos-init aos-animate fade-right">
                <img src={img4} className="img-fluid" alt="" />
              </div>
              <div
                class="col-xl-6 d-flex align-items-stretch pt-4 pt-xl-0 aos-init aos-animate fade-left"
                data-aos-delay="300"
              >
                <div class="content d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div
                        class="scroll-animation zoom-in animate"
                        data-aos="fade-down"
                      >
                        <div class="count-box text-justify text-md-start">
                          <span class="text-center">
                            <i className="fa-regular fa-face-grin-hearts"></i>
                          </span>
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="65"
                            data-purecounter-duration="0"
                            class="purecounter"
                          >
                            65
                          </span>
                          <p>
                            <strong>Happy Clients</strong> More than 65 Clients
                            joined us, and we live up to our Clients'
                            Expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div
                        class="scroll-animation zoom-in animate"
                        data-aos="fade-down"
                      >
                        <div class="count-box text-justify text-md-start">
                          <i className="fa-solid fa-diagram-project"></i>
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="85"
                            data-purecounter-duration="0"
                            class="purecounter"
                          >
                            85
                          </span>
                          <p>
                            <strong>Projects</strong> We have successfully
                            completed approximately 78 projects all over the
                            world, making it easy for our clients.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div
                        class="scroll-animation zoom-in animate"
                        data-aos="fade-down"
                      >
                        <div class="count-box text-justify text-md-start">
                          <i className="fa-regular fa-calendar-days"></i>
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="09"
                            data-purecounter-duration="0"
                            class="purecounter"
                          >
                            09
                          </span>
                          <p>
                            <strong>Years of Experience</strong> Sankhyana is
                            India's largest ed-tech company and the creator of
                            India's most loved learning website. Launched in
                            2009.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div
                        class="scroll-animation zoom-in animate"
                        data-aos="fade-down"
                      >
                        <div class="count-box text-justify text-md-start">
                          <i className="fa-solid fa-award"></i>
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="15"
                            data-purecounter-duration="0"
                            class="purecounter"
                          >
                            15
                          </span>
                          <p>
                            <strong>Awards</strong> Recognition for outstanding
                            achievements and contributions in [analytics and
                            training], this award celebrates excellence and
                            innovation, showcasing a commitment to excellence
                            and leadership.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end secondary section */}

      {/* ------------Card----------- */}
      <section className="Choose1">
        <div className="Choose_1">
          <h2>Why Choose Us ?</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div
                class="scroll-animation zoom-in animate"
                data-aos="fade-down"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <img src={img16} alt="" />
                    <h5 className="card-title">It Consulting & Solutions</h5>
                    <p className="card-text text-justify">
                      Sankhyana Consultancy Services is an advanced analytics
                      firm which visualizes data and envisages insights that
                      help enterprises take optimal business decisions at an
                      incredible fast pace and have a competitive edge over
                      their competitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                class="scroll-animation zoom-in animate"
                data-aos="fade-down"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <img src={img17} alt="" />
                    <h5 className="card-title">Business Technology</h5>
                    <p className="card-text text-justify">
                      Sankhyana is managed by a blend of young professionals
                      with many years of experience in the analytics field. We
                      bring to the table complementary research skills in data
                      processing, analytics,client servicing, and marketing
                      consultancy in countries like forign and India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                class="scroll-animation zoom-in animate"
                data-aos="fade-down"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <img src={img18} alt="" />
                    <h5 className="card-title">Get Certificate</h5>
                    <p className="card-text text-justify">
                      This certificate is awarded in recognition of the
                      dedication, commitment, and successful completion of the
                      specified course/program. The recipient has demonstrated a
                      high level of competence and understanding in the subject
                      matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      {/* card2 */}

      <div className="scroll-animation">
        <section id="Card3">
          <div class="row">
            <div class="col-md-8 col-sm-12 mb-1">
              <div
                class="scroll-animation zoom-in animate"
                data-aos="fade-down"
              >
                <p>
                  {" "}
                  If you are a customer seeking information about "SANKHYANA"
                  analytics solutions and services,we refer you to our primary
                  site: www.sankhyana.com
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 mb-1">
              <div class="scroll-animation zoom-in  animate" data-aos="fade-down">
                <button>
                  <a href="/support">Enquiry NOW</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="container rounded">
            <h2 className="text-center">Our Happy Clients</h2>
            <div className="slider">
              <div className="logos">
                <img src={img6} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img7} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img8} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img9} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img11} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img12} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img13} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img10} alt="" className="small-image_3" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
