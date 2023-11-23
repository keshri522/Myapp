import React from "react";
import "../Css/Anaint.css";

function Financial() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>FINANCIAL SERVICE SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Financial Services Solutions</h5>
                  <p class="cardA-text">
                    Financial services solutions encompass a wide array of
                    technologies and strategies designed to streamline
                    operations, enhance customer experiences, and ensure
                    regulatory compliance within the financial industry
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
                <h5 class="cardB-title">Financial Services Solutions</h5>
                <p class="cardB-text">
                  We provide solutions for banking and insurance to investment
                  and financial planning, these services are essential for both
                  businesses and individuals.{" "}
                </p>
                <h5 class="cardB-title">Investment and Wealth Management</h5>
                <ul>
                  <li>
                    Many businesses and business owners require investment and
                    wealth management services to grow their assets.
                  </li>
                  <li>
                    {" "}
                    This includes investment advisory, portfolio management, and
                    retirement planning to secure the financial future of the
                    business and its stakeholders.
                  </li>
                </ul>
                <h5 class="cardB-title">Payment and Transaction Services</h5>
                <ul>
                  <li>
                    Financial institutions provide payment and transaction
                    services that facilitate the smooth functioning of business
                    operations.{" "}
                  </li>
                  <li>
                    This includes services like wire transfers, electronic
                    payments, and merchant services, which are vital for sales
                    and revenue collection.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Access to Global Markets</h5>
                <ul>
                  <li>
                    {" "}
                    Financial institutions facilitate access to global financial
                    markets, allowing businesses to invest, raise capital, and
                    diversify their assets on a global scale.
                  </li>
                </ul>
                <h5 class="cardB-title">Tax and Accounting Services</h5>
                <ul>
                  <li>
                    {" "}
                    Financial institutions offer tax planning and accounting
                    services to ensure compliance with tax regulations and
                    optimize tax efficiency.
                  </li>
                  <li>
                    This helps businesses reduce their tax burden and manage
                    their financial records effectively.
                  </li>
                </ul>
                <h5 class="cardB-title">Regulatory Compliance</h5>
                <ul>
                  <li>
                    {" "}
                    Financial institutions help businesses navigate complex
                    financial regulations. Staying compliant with laws and
                    regulations is critical to avoiding legal issues and
                    maintaining a positive reputation.
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

export default Financial;
