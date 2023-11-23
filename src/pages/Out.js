import React from "react";
import "../Css/Anaint.css";

function Out() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>CONSULTING AND OUT-SOURCING SOLUTIONS</h6>
              <h2>TO HARNESS THE POWER OF BUSINESS DATA</h2>
              {/* <button className="btn-get-started scrollto" data-bs-toggle="modal" data-bs-target="#LoginModal">
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
                  <h5 class="cardA-title">Counsulting & Out-Sourcing</h5>
                  <p class="cardA-text">
                    Consulting and outsourcing are strategic business practices
                    that involve seeking external expertise and delegating
                    specific business functions to third-party service
                    providers.{" "}
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
                <h5 class="cardB-title">Counsulting & Out-Sourcing</h5>
                <p class="cardB-text">
                  We have also worked with clients to enhance the efficiency of
                  their analytical applications, develop forecasting models,
                  analyse customer satisfaction data and a wide range of other
                  projects applying powerful Statistical tools to data.
                </p>
                <ul>
                  <li>
                    Mining and Database Marketing. Interpretable and actionable
                    results from applying analytic tools to your data.
                  </li>
                  <li>
                    Market Analysis. Perform Competitor Analysis, Brand
                    Positioning, Benchmarking, Sensitivity Analysis, Promotional
                    Analysis & Communication Effectiveness Analysis.
                  </li>
                  <li>
                    Customer Segmentation. Meaningful insights from clustering
                    and related analytical tools which drive successful
                    implementation of business strategies.
                  </li>
                  <li>
                    Forecasting. Effective forecasts of future values by
                    applying wide range of analytical tools to historical time
                    series data.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                {/* <h5 class="cardB-title">Fraud & Financial Crimes Compliance: -</h5> */}
                {/* <p class="cardB-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <ul>
                  <li>
                    Strategic and tactical analysis. across industry verticals.
                  </li>
                  <li>
                    Develop custom solutions & reports. for fast changing
                    business scenarios.
                  </li>
                  <li>
                    Analytical Application Efficiency Improvement. Streamlining
                    and improving even the most complex application by applying
                    “best practices” in analytical programming, data management
                    and data processing.
                  </li>
                  <li>
                    Our Outsourcing activities have spanned both globally and
                    within India with capabilities to cater analytical solutions
                    both from in-house and from offshore.
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

export default Out;
