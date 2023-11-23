import React from "react";
import "../Css/Anaint.css";

function Retails() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>RETAILS SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Retails Solutions</h5>
                  <p class="cardA-text">
                    Retail solutions encompass a wide range of technologies and
                    strategies aimed at improving various aspects of the retail
                    industry, from customer experience to operational
                    efficiency.
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
                <h5 class="cardB-title">Retail Solutions</h5>
                <p class="cardB-text">
                  The advent of e-commerce and innovations in technology has
                  created a no level playing field for traditional brick &
                  mortar retailers. Traditional retailers are undergoing a
                  paradigm shift in the delivery system, along with offline
                  delivery they are also into online delivery.
                </p>
                <h5 class="cardB-title">Behavioural Analytics</h5>
                <ul>
                  <li>
                    Our analytics team is expertise in understanding consumer
                    behaviour in ecommerce platforms, web & mobile applications
                    and develop a predictive model
                  </li>
                </ul>
                <h5 class="cardB-title">
                  Technographic Segmentation & Profiling
                </h5>
                <ul>
                  <li>
                    Technographic segmentation is the powerful tool for
                    segmenting and profiling customers on the basis of their
                    attitude towards technology, owning right technology & usage
                    of technology.
                  </li>
                  <li>
                    Our Analytics team shares expertise in Technographic
                    segmentation & profiling of customers.
                  </li>
                  <li>
                    Technographic segmented clusters are more action oriented
                    and hence forms the basis for devising all operational
                    strategies for special offers, special discounts and
                    seasonal offers, etc.,
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
                    launch of new outlet, etc.,{" "}
                  </li>
                  <li>
                    These segments are formed on the basis of customers’
                    emotional attachment towards the brand and their attitude
                    towards technology & lifestyle
                  </li>
                </ul>
                <h5 class="cardB-title">Supply Chain Analytics</h5>
                <ul>
                  <li>
                    Supply Chain is vital for retail especially with increasing
                    ecommerce preference for purchase by consumer; supply chain
                    forms the core for success of retail in contemporary.{" "}
                  </li>
                  <li>
                    Supply chain strategy would be effective only if the data
                    pertaining to product sales, customer purchases, repeat
                    purchases, suppliers’ data, time of sale, time of delivery,
                    etc., are properly analysed by analytics.
                  </li>
                </ul>
                <h5 class="cardB-title">Additional Analytical Insights</h5>
                <ul>
                  <li>Additional Analytical Insights</li>
                  <li>Reduce out-of stock</li>
                  <li>Optimize delivery time</li>
                  <li>Reduce waiting time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Retails;
