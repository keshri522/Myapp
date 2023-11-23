import React from "react";
import "../Css/Anaint.css";

function Social() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>SOCIAL SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Social Solution</h5>
                  <p class="cardA-text">
                    Social solutions refer to technologies, platforms, and
                    strategies designed to address social issues, improve
                    community well-being, and foster positive societal impact
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
                <h5 class="cardB-title">Socail Media Solutions</h5>
                <p class="cardB-text">
                  {" "}
                  Social Media Detection - Identify the top social network
                  influencers and their communities.
                </p>
                <ul>
                  <li>
                    Collect Data - Collect right data from the identified social
                    media.
                  </li>
                  <li>
                    Customer Segmentation - To create a profile of each customer
                    segment based on their social media interactions.
                  </li>
                  <li>
                    Predict Demand - Predict demand based on the analysis of
                    gathered data for each segment using Predictive Analytics.
                  </li>
                  <li>
                    Strategic Business Decisions - Optimize mix of advertising
                    and promotions – through websites, emails, social media,
                    etc., and provide best offers to the right customers at the
                    right time – in real time.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">
                  Our Social Media analytical insights enable to take
                  comprehensive action on:
                </h5>
                <ul>
                  <li>How to prioritize whom to target?</li>
                  <li>Which prospects will respond to a campaign?</li>
                  <li>
                    How to acquire more customers who look like best customers?
                  </li>
                  <li>
                    How to optimize campaign expense by focusing on the right
                    prospects?
                  </li>
                  <li>
                    How to compare the characteristics of different segments to
                    determine segment-specific actions?
                  </li>
                  <li>
                    What is the profitability and channel usage of each segment?
                  </li>
                  <li>
                    Which customers are good candidates for cross-selling?
                  </li>
                  <li>Which products or services are most appropriate?</li>
                  <li>What is the best time and channel to make an offer?</li>
                  <li>
                    How to precisely target cross-sell offers to reduce the
                    possibility of customer fatigue?
                  </li>
                  <li>
                    What is the expected demand from various customer segments?
                  </li>
                  <li>How to price the inventory to maximize revenue?</li>
                  <li>How to reserve inventory to most valuable customers?</li>
                  <li>
                    How to optimize the Pricing by considering various factors
                    affecting Pricing?
                  </li>
                  <li>
                    How to use pricing as a tool to enhance revenues, in a
                    scientific manner?
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

export default Social;
