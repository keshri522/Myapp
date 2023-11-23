import React from "react";
import "../Css/Anaint.css";

function Bank() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>BANKING SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Bank Solutions</h5>
                  <p class="cardA-text">
                    Core banking solutions manage a bank's primary functions,
                    including account management, deposits, loans, and
                    transaction processing.
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
                <h5 class="cardB-title">Banking Soultions</h5>
                <p class="cardB-text">
                  {" "}
                  SAS believes that surviving banks will be hyperintelligent,
                  AI-driven organizations that can provide personalized, trusted
                  customer experiences, as well as meet risk and compliance
                  mandates.
                </p>
                <h5 class="cardB-title">Risk management</h5>
                <ul>
                  <li>
                    SAS® Credit Assessment Manager Evaluate your entire loan
                    portfolio by performing both qualitative and quantitative
                    assessments of individual nonperforming loans.
                  </li>
                  <li>
                    SAS® Credit Scoring Develop, validate and monitor credit
                    scorecards faster, cheaper and more flexibly than any
                    outsourcing alternative.
                  </li>
                  <li>
                    SAS® Governance and Compliance Manager Build trust in risk
                    and compliance programs by connecting the enterprise.
                  </li>
                  <li>
                    SAS® High-Performance Risk Make better, faster decisions
                    based on current views of your overall risk exposure.
                  </li>
                  <li>
                    SAS® Model Implementation Platform Quickly and efficiently
                    execute a wide range of models used in bank stress tests and
                    other enterprise-level risk assessments.
                  </li>
                  <li>
                    SAS® Model Risk Management Significantly reduce your model
                    risk, improve your decision making and financial
                    performance, and meet regulatory demands with comprehensive
                    model risk management.
                  </li>
                  <li>
                    SAS® Regulatory Content for IFRS 9 Accelerate time to
                    benefit and quickly meet new IFRS 9 standards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">
                  Fraud & Financial Crimes Compliance: -
                </h5>
                {/* <p class="cardB-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <ul>
                  <li>
                    SAS® Anti-Money Laundering Take a risk-based approach to
                    monitoring transactions for money laundering and terrorist
                    financing activities.
                  </li>
                  <li>
                    SAS® Customer Due Diligence Rate new customers and update
                    existing customer scores based on key events and new
                    information.
                  </li>
                  <li>
                    SAS® Cybersecurity Understand your security posture,
                    identify current weaknesses, prioritize remediation and see
                    risk prior to compromise.
                  </li>
                  <li>
                    SAS® Detection and Investigation for Banking Find and stop
                    organized and first-party application and payments fraud
                    with a single, end-to-end solution.
                  </li>
                  <li>
                    SAS® Fraud ManagementDetect, prevent and manage fraud
                    enterprise wide in real time – from a single platform.
                  </li>
                  <li>
                    SAS® Visual Investigator Address a wide variety of
                    intelligence analysis and investigation management needs
                    with speed and precision.
                  </li>
                </ul>
                <h5 class="cardB-title">Customer Experience: -</h5>
                {/* <p class="cardB-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <ul>
                  <li>
                    SAS® Customer Intelligence 360 Infuse your marketing
                    decisions with unprecedented customer insights, and create
                    relevant, satisfying, valued customer experiences.
                  </li>
                  <li>
                    SAS® Intelligent Advertising for Publishers Gain complete
                    control over your online advertising and make ad server
                    processes more efficient.
                  </li>
                  <li>
                    SAS® Intelligent Decisioning Enable analytically driven
                    real-time customer interactions and automate operational
                    business decisions at scale.
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

export default Bank;
