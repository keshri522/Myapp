import React from "react";
import "../Css/Anaint.css";

function Business() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>DATA & ANALYTICS SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Data $ Analytics Solutions</h5>
                  <p class="cardA-text">
                    We Provide solutions empower businesses to base their
                    decisions on facts and insights rather than gut feelings or
                    intuition.
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
                <h5 class="cardB-title">Data & Analytics Solotions</h5>
                <p class="cardB-text">
                  We Provide solutions empower businesses to base their
                  decisions on facts and insights rather than gut feelings or
                  intuition.
                </p>
                <h5 class="cardB-title">Customer Understanding</h5>
                <ul>
                  <li>
                    {" "}
                    We Understanding customer preferences and behavior is
                    crucial for tailoring products and services
                  </li>
                  <li>
                    {" "}
                    Data analytics can provide deep insights into customer
                    needs, helping businesses create personalized experiences
                    and improve customer satisfaction.
                  </li>
                </ul>
                <h5 class="cardB-title">Revenue Growth</h5>
                <ul>
                  <li>
                    Data-driven insights can uncover untapped revenue streams.{" "}
                  </li>
                  <li>
                    Businesses can identify upsell and cross-sell opportunities,
                    pricing strategies, and market expansion potential, leading
                    to revenue growth.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Customer Retention</h5>
                <ul>
                  <li>
                    Analyzing customer data can help in identifying at-risk
                    customers and implementing strategies to retain them. This
                    can be more cost-effective than acquiring new customers.
                  </li>
                </ul>
                <h5 class="cardB-title">Marketing and Sales Optimization</h5>
                <ul>
                  <li>
                    Through data analytics, businesses can refine their
                    marketing strategies and sales efforts
                  </li>
                  <li>
                    This includes segmenting the target audience, understanding
                    the effectiveness of marketing campaigns, and improving
                    conversion rates.
                  </li>
                  <li></li>
                </ul>
                <h5 class="cardB-title">Risk Management</h5>
                <ul>
                  <li>
                    {" "}
                    Analyzing data can help companies identify and mitigate
                    risks. This includes fraud detection, compliance monitoring,
                    and predicting market fluctuations that could impact the
                    business.
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

export default Business;
