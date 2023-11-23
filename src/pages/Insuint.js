import React from "react";
import "../Css/Anaint.css";

function Insurance() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>INSURANCE SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Insurance Solutions</h5>
                  <p class="cardA-text">
                    Insurance solutions encompass a wide range of technologies
                    and strategies designed to streamline operations, enhance
                    customer experiences, and manage risks in the insurance
                    industry
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
                <h5 class="cardB-title">Insurance Solutions</h5>
                <p class="cardB-text">
                  Insurance companies are facing profound competition and have
                  understood the importance of analytics. Insurance companies
                  are now personalizing their products and accommodations for
                  demanding customers to surmount these challenges by utilizing
                  analytics solutions to avail them work better and work
                  differently. Analytics in insurance is undergoing a paradigm
                  shift from just a reporting to advanced analytics with
                  detailed reports.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Insurance Analytics Services:</h5>
                <ul>
                  <li>
                    Claim Analytics: By utilizing customer historical profile,
                    industry practices and customer journey information, we can
                    provide you the customer groups to target to maximize your
                    paid claims.
                  </li>
                  <li>
                    Fraud Analytics: We can avail you determine the eligibility
                    of customer for health plans and identify and obviate claims
                    fraud by utilizing prescriptive and predictive analytical
                    techniques.
                  </li>
                  <li>
                    Customer Analytics: We provide the required market insights
                    and competitor analysis to avail clients manage and provide
                    unique product offerings at good prices to increment
                    customer acquisition and retention.
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

export default Insurance;
