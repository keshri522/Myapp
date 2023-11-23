import React from "react";
import "../Css/Anaint.css";

function Cloud() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>CLOUD SERVICE SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Cloud Service Solutions</h5>
                  <p class="cardA-text">
                    Cloud service solutions encompass a variety of technologies
                    and services delivered over the internet, providing
                    scalable, on-demand computing resources. These solutions
                    offer flexibility, cost-effectiveness, and enable
                    organizations to focus on their core business activities.{" "}
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
                <h5 class="cardB-title">Cloud Service Solutions</h5>
                <p class="cardB-text">
                  Cloud services provide numerous advantages and opportunities
                  for businesses to enhance their operations and gain a
                  competitive edge. Here's an in-depth look at cloud services
                  from a business viewpoint:{" "}
                </p>
                <h5 class="cardB-title">
                  4. Disaster Recovery and Business Continuity
                </h5>
                <ul>
                  <li>
                    Cloud services offer robust disaster recovery and backup
                    solutions, reducing the risk of data loss and downtime due
                    to unforeseen events.
                  </li>
                  <li>
                    Businesses can replicate their data across multiple
                    geographic regions to ensure continuity of operations.
                  </li>
                </ul>
                <h5 class="cardB-title">Competitive Advantage</h5>
                <ul>
                  <li>
                    Companies that leverage cloud services often gain a
                    competitive advantage. They can focus on innovation and
                    differentiation, as cloud providers handle the underlying
                    infrastructure.
                  </li>
                  <li>
                    Small and medium-sized businesses can compete with larger
                    enterprises by accessing the same technology resources.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title"> Vendor Ecosystems and Partnerships</h5>
                <ul>
                  <li>
                    Cloud providers often have extensive ecosystems of partners
                    and third-party applications. Businesses can leverage these
                    partnerships to enhance their own services and capabilities.
                  </li>
                  <li>
                    Leveraging cloud services effectively can be a key driver of
                    business success in today's digital age.
                  </li>
                </ul>
                <h5 class="cardB-title">Data Insights and Analytics</h5>
                <ul>
                  <li>
                    Cloud services are integral to data analytics and business
                    intelligence. They offer the computing power and storage
                    necessary to process and analyze large datasets.
                  </li>
                  <li>
                    Businesses can derive valuable insights from their data,
                    helping them make informed decisions and improve their
                    operations.
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

export default Cloud;
