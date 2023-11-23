import React from "react";
import "../Css/Anaint.css";

function Health() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>HEALTHCARE SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Healthcare Solutions</h5>
                  <p class="cardA-text">
                    Healthcare solutions encompass a wide range of technologies
                    and strategies designed to enhance patient care, improve
                    operational efficiency, and advance medical research within
                    the healthcare industry.
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
                <h5 class="cardB-title">Healthcare Solutions</h5>
                <p class="cardB-text">
                  {" "}
                  it has become the need of the hour for pharma firms to know
                  the expectations of their wholesalers/stockists,
                  chemists/retailers and physicians thoroughly. A firm which
                  better understand the members in their marketing channel will
                  reap the profits consistently and will ensure a sustainable
                  growth in the long run.{" "}
                </p>
                <h5 class="cardB-title">Healthcare Marketing Analytics</h5>
                <ul>
                  <p>
                    The following Healthcare Marketing Analytical insights are
                    provided:
                  </p>
                  <li>
                    Expectations from wholesalers, Stockists, Retailers/Chemists
                    and Physicians.
                  </li>
                  <li>
                    Factors influencing wholesalers, Stockiest,
                    Retailers/Chemists and Physicians to take-off a company’s
                    product.
                  </li>
                  <li>How replenishment happens at chemist on stock out.</li>
                  <li>
                    Behaviour towards patient/customer by chemist/retailer on
                    stock out.
                  </li>
                  <li>
                    Ascertain reasons for stock out/stock pile-up at different
                    levels of supply chain.
                  </li>
                  <li>Impact on demand pattern due to stock out.</li>
                  <li>Estimate demand, inventory control, SKU analysis.</li>
                  <li>
                    Creation of Consolidated Master File (CMF) which includes
                    information on Drugs, wholesalers, stockists,
                    Retailers/Chemists and Physicians, regions, inventory,
                    supply-chain, etc.,
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Medical Rep Call Analytics</h5>
                <p class="cardB-text">
                  Our analytics team provides the following medical rep call
                  related analytical insights:
                </p>
                <ul>
                  <li>
                    Medical Representative and Physician alignment according to
                    specialization.
                  </li>
                  <li>FTE calculations of Reps on weekly and monthly basis.</li>
                  <li>Rx and TRx data analysis.</li>
                  <li>
                    Ascertaining Physician Accessibility based on number of
                    calls received in a specified period.{" "}
                  </li>
                  <li>
                    Data Extraction on drugs from calls made by Reps to
                    Physicians or Hospitals.
                  </li>
                  <li>
                    Creation of Data Supply System (DSS) from Reps and
                    Physicians.{" "}
                  </li>
                  <li>APLD and HCOS data analysis.</li>
                </ul>
                <h5 class="cardB-title">Clinical Trials Analytics</h5>
                <p class="cardB-text">
                  Our analytics team can cater thorough data analysis on
                  Clinical Trials (Phase I, Phase II, Phase III & Phase IV) &
                  Implementation of CDISC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Health;
