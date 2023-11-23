import React from "react";
import "../Css/Anaint.css";

function Energy() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>ENERGY SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Energy Solutions</h5>
                  <p class="cardA-text">
                    Energy solutions encompass a diverse range of technologies
                    and strategies aimed at generating, distributing, and
                    optimizing the use of energy. These solutions are designed
                    to address environmental concerns, enhance energy
                    efficiency, and meet the growing demand for sustainable
                    energy sources
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
                <h5 class="cardB-title">Energy Solutions</h5>
                <p class="cardB-text">
                  . A major fraction of the required energy will perpetuate to
                  be provided by thermal – mainly fossil fuel-fired and nuclear
                  – power plants.We allow energy analysts to facilely prep,
                  blend, and analyze data from all sources and perform analytics
                  — predictive, statistical, and spatial — utilizing an
                  intuitive, drag-and-drop interface. Our deep bench of
                  analytics experts brings visualization tools, solution assets
                  and the support of a global, energy hub network.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Energy Analytics Solution:-</h5>
                <ul>
                  <li>
                    Coalesce utilization data from keenly intellective meters
                    with billing information to presage energy demand.
                  </li>
                  <li>
                    Analyse end-customer consumption and utilization patterns to
                    offer better pricing and accommodation options.
                  </li>
                  <li>
                    Leverage predictive analytics to anticipate outages,
                    determine root cause of failures, and minimize grid down
                    time.
                  </li>
                  <li>
                    Comply with regulatory requisites with a repeatable workflow
                    predicated on best practices.
                  </li>
                  <li>
                    Minimize fuel costs and maximize load capacity to amend
                    profit margins.
                  </li>
                  <li>
                    Score customers on their likelihood to switch to another
                    provider to proactively intervene and retain them.
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

export default Energy;
