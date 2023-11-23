import React from "react";
import "../Css/Anaint.css";

function Out() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>TELECOMMUNICATION SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Telecommunications Soultions</h5>
                  <p class="cardA-text">
                    Primary sim user analysis to ascertain the Consumer
                    Behaviour Scores which enables to compare across
                    competitors’ primary sim users and devise appropriate
                    promotional strategies for each cluster of customers;
                    Perform the same analysis with customers using Primary and
                    Secondary sim with one of them being the competitors’ sim.
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
                <h5 class="cardB-title">Telecommunications Solutions</h5>
                <p class="cardB-text">
                  In contemporary it is highly essential to relate to your
                  customer at all times, know their needs and provide what they
                  want. Analytics enables to relate to the customers, understand
                  their needs, provide what they want and ensure your customers
                  are delighted and become loyal{" "}
                </p>
                <h5 class="cardB-title">
                  Consumer Behaviour Scores for Churn analytics
                </h5>
                <ul>
                  <li>
                    Primary sim user analysis to ascertain the Consumer
                    Behaviour Scores which enables to compare across
                    competitors’ primary sim users and devise appropriate
                    promotional strategies for each cluster of customers;
                    Perform the same analysis with customers using Primary and
                    Secondary sim with one of them being the competitors’ sim.
                  </li>
                </ul>
                <h5 class="cardB-title">
                  Technographic Segmentation & profiling
                </h5>
                <ul>
                  <li>
                    Technographic segmentation is the powerful tool for
                    segmenting and profiling customers based on their attitude
                    towards technology, owning right technology & usage of
                    technology.
                  </li>
                  <li>
                    based on their attitude towards technology, owning right
                    technology & usage of technology. Our Analytics team shares
                    expertise in Technographic segmentation & profiling of
                    customers. Technographic segmented clusters are more action
                    oriented and hence forms the basis for devising all
                    operational strategies for special offers and seasonal
                    offers, etc.,
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">
                  Identifying Opportunity Clusters for Product Targeting
                </h5>
                <ul>
                  <li>
                    Opportunity clusters form positional segments and are used
                    for all positional strategies such as brand promotion,
                    launch of new plan, etc.,{" "}
                  </li>
                  <li>
                    These segments are formed on the basis of customers’
                    emotional attachment towards the service providers and their
                    attitude towards technology & lifestyle
                  </li>
                </ul>
                <h5 class="cardB-title">Additional Analytical Insights</h5>
                <ul>
                  <li>
                    Our analytics team can also cater to the following services
                  </li>
                  <li>
                    Deeper understanding of consumer behaviour, attitudes and
                    perceptions
                  </li>
                  <li>Customer Satisfaction study</li>
                  <li>Brand Awareness Study</li>
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
