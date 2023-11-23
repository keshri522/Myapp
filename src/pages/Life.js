import React from "react";
import "../Css/Anaint.css";

function Life() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>ANALYTICAL SOLUTIONS</h6>
              <h2>TO HARNESS THE POWER OF BUSINESS DATA</h2>
              {/* <button
                className="btn-get-started scrollto"
                data-bs-toggle="modal"
                data-bs-target="#LoginModal"
              >
                Explore NOW
              </button> */}
            </div>
            <div className="col-sm-6">
              <div class="cardA">
                <img
                  class="cardA-img-top"
                  src="https://st.depositphotos.com/1007989/4621/i/450/depositphotos_46211187-stock-photo-computer-mascot.jpg"
                  alt="Card image cap"
                />
                <div class="cardA-body">
                  <h5 class="cardA-title">Life Science Solutions</h5>
                  <p class="cardA-text">
                    Life science solutions encompass a range of technologies and
                    strategies designed to advance research, development,
                    manufacturing, and delivery within the fields of biology,
                    healthcare, pharmaceuticals, and biotechnology.{" "}
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="autoB" className="autoB">
        <div class="row">
          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Life Science Solutions</h5>
                <p class="cardB-text">
                  With data analytics availing expedite magnification and
                  revelation across multiple industries, life science
                  organizations have made great strides towards becoming
                  analytics-driven through harvesting astuteness from their
                  content from multiple repositories.
                </p>
                <h5 class="cardB-title">Life- Science Analytics Services:</h5>
                <ul>
                  <li>
                    Fast access to real-world evidence. Directly interact with
                    real-world data. Quickly determine study feasibility based
                    on the number of patients meeting criteria. Extract patient
                    populations interactively to reduce required time and
                    resources. Identify patient populations without coding.
                    Reuse and modify criteria against other real-world data
                    assets to compare across populations, reducing time and
                    improving efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <ul>
                  <li>
                    A complete analytical toolset. Access an analytics library
                    of methodologies that include simple descriptive statistics,
                    predictive analytics and machine learning methods to compare
                    outcome variables of interest across or within
                    patient/member cohorts.
                  </li>
                  <li>
                    An analytical framework for clinical research. With our
                    end-to-end clinical analytics foundation, you'll spend less
                    time on operational data management activities and more time
                    on data exploration, data quality monitoring, and executing
                    advanced analytics and statistics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Life;
