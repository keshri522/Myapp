import React from "react";
import "../Css/Anaint.css";

function Auto() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>AUTOMATIVE SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Automative Soltions</h5>
                  <p class="cardA-text">
                    Technologies like adaptive cruise control, lane departure
                    warning, and automatic emergency braking contribute to
                    semi-autonomous driving capabilities.
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
                <h5 class="cardB-title">Automative Soultions</h5>
                <p class="cardB-text">
                  We have visually perceived many sizably voluminous companies
                  going down for this single reason.
                </p>
                <ul>
                  <li>
                    Automotive analytics avails companies optimize sundry
                    factors that can be banked upon for prosperous survival and
                    expansions.
                  </li>
                  <li>
                    Digitalization, globalization & customer-centric market are
                    posing challenges to Analytics in the Automotive sector.
                  </li>
                  <li>
                    Not only that, the recent International treaties on climate
                    changes, the incrementation in fixate on safety requisites
                    are to be considered for a sustainable survival of this
                    sector.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Automotive Analytical Services:</h5>
                <p class="cardB-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <ul>
                  <li>
                    Our analytics expertise team will perpetually strive to
                    focus not only on the quandaries that the customers are
                    facing but additionally contributes significantly to RCA
                    (Root Cause Analysis). We rely on our Robust analytical
                    capabilities to derive actionable insights that avail OEMs
                    and other players of automotive sectors to take strategic
                    decisions, to remain Competitive.
                  </li>
                  <li>
                    Our R&D team takes into consideration sundry aspects and
                    expertise such as Customer analytics, sentiment analytics,
                    Optimization techniques, product breakdown presage models,
                    etc., into consideration, which augment innovations, thereby
                    giving players in this sector a competitive edge in these
                    dynamic market conditions.
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

export default Auto;
