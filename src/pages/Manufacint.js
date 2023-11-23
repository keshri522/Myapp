import React from "react";
import "../Css/Anaint.css";

function Manufacturing() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>MANUFACTURING SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Manufacturing Solutions</h5>
                  <p class="cardA-text">
                    Manufacturing solutions encompass a range of technologies
                    and strategies designed to enhance efficiency, optimize
                    production processes, and improve overall productivity in
                    the manufacturing industry.{" "}
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
                <h5 class="cardB-title">Manufacturing Solutions</h5>
                <p class="cardB-text">
                  The challenges faced by manufacturing industries vary across
                  the various lines of business, from raw materials to conveying
                  culminated goods to customers. We will perpetually strive to
                  focus not only on the quandaries that the customers are
                  facing, but withal contributes significantly to RCA. We rely
                  on our Robust analytical capabilities to derive actionable
                  insights that avail Manufacturers to take strategic decisions,
                  to Remain Competitive.
                </p>
                <h5 class="cardB-title">Retail Analytics Services:</h5>
                <ul>
                  <li>
                    Voice of the customer: Detect perceived quality and safety
                    issues afore they escalate.
                  </li>
                  <li>
                    Big data integration: Get a single, comprehensive view of
                    all quality-cognate data.
                  </li>
                  <li>Total cost of quality: Reduce scrap and rework.</li>
                  <li>
                    Predictive maintenance: Minimize extemporaneous downtime.
                  </li>
                  <li>
                    Early issue admonishment:Expeditiously identify design and
                    engenderment defects afore they become widespread.
                  </li>
                  <li>
                    Perceptual service quality. Integrate and analyse all types
                    of external and internal data sources to understand and
                    manage the perceived quality of your products.
                  </li>
                  <li>
                    Early-warning signals.Compare sentiments and set alerts
                    before and after product launches.
                  </li>
                  <li>
                    Suspect claims detection. Identify potential fraud and
                    reduce service costs through automated reviews of every
                    claim.
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
                    Issue resolution analysis. Conduct efficient root-cause
                    analyses with powerful filtering capabilities.
                  </li>
                  <li>
                    Service parts optimization. First-call fix with the right
                    part and the right skills. Reduce stockouts and overages
                    with accurate parts demand forecasting.
                  </li>
                  <li>
                    Asset utilization. Optimize asset performance by predicting
                    failures and reducing unnecessary scheduled maintenance and
                    increase productive uptime.
                  </li>
                  <li>
                    Contact centre resource optimization. Make solid predictions
                    of service volumes and give managers and agents continuous
                    feedback to improve the service experience.
                  </li>
                  <li>
                    Demand-driven planning. Generate accurate forecasts at every
                    level. Even for individual SKUs.
                  </li>
                  <li>
                    Multiechelon inventory optimization. Manage production and
                    logistics to match fluctuating customer needs and changing
                    marketplace dynamics.
                  </li>
                  <li>
                    Demand sensing and shaping. Translate demand signals – like
                    seasonality, price, promotions, events and merchandising –
                    into a more effective, market-driven response.
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

export default Manufacturing;
