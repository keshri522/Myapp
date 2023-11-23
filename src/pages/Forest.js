import React from "react";
import "../Css/Anaint.css";

function Forest() {
  return (
    <>
      <section id="auto" className="autoM">
        <div className="hero-info" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-sm-6">
              <h6>FOREST SOLUTIONS</h6>
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
                  <h5 class="cardA-title">Forest Solutions</h5>
                  <p class="cardA-text">
                    Forest solutions encompass a variety of technologies and
                    strategies designed to manage and protect forests, promote
                    sustainable forestry practices, and address environmental
                    challenges
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
                <h5 class="cardB-title">Forest Solutions</h5>
                <p class="cardB-text">
                  it aids in Forest/Plantation Planning and Forestry/Plantation
                  Management effectively and efficiently and facilitates in
                  quick decision making by providing relevant insights from the
                  forest/plantation data.
                </p>
                <h5 class="cardB-title">Forestry Analytical Services</h5>
                <h6>Forest/Plantation Management</h6>
                <ul>
                  <li>
                    Forestry Analytics aids in increasing forest/plantation land
                    by managing plantations in waste lands, community lands,
                    etc.,
                  </li>
                  <li>
                    Predictive Analytics can be used to analyse and forecast the
                    impact of forest/plantation harvesting on ecology. Thereby
                    Analytics enables to control harvesting plantations
                    systematically to cater to human needs by optimally trading
                    off between ecological balance.
                  </li>
                </ul>
                <h5 class="cardB-title">Forest/Plantation Protection</h5>
                <ul>
                  <li>
                    Forestry Analytics enables protect existing
                    forests/plantations flora and fauna.
                  </li>
                  <li>
                    To preserve the ecological balance by achieving a trade-off
                    between human needs and environment.
                  </li>
                  <li>
                    To discover patterns of degradation, smuggling and poaching.
                  </li>
                </ul>
                <h5 class="cardB-title">Sapling Sizing</h5>
                <ul>
                  <li>
                    Predictive Analytics can be used to predict the size and
                    shape of the trees and its impact on landscape before
                    planting the sapling.
                  </li>
                  <li>
                    To track the saplings planted for year or two depending on
                    species
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="cardB">
              <div class="cardB-body">
                <h5 class="cardB-title">Fire Line Management</h5>
                {/* <p class="cardB-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <ul>
                  <li>
                    Predictive Analytics can be used to ascertain the Fire
                    Behaviour and then predict optimal fire line/break track.
                  </li>
                  <li>Scheduling Periodical Maintenance of Fire line.</li>
                  <li>To optimize costs involved in Fire line Management.</li>
                </ul>
                <h5 class="cardB-title">Elephant Proof Trenches Management</h5>

                <ul>
                  <li>
                    Predictive Analytics can be used to ascertain the Elephant
                    Herd Behaviour and then predict optimal Elephant Proof
                    Trenches track which complies with regulatory constraints.
                  </li>
                  <li>
                    Scheduling Periodical Maintenance of Elephant Proof
                    Trenches.
                  </li>
                  <li>
                    To optimize costs involved in Elephant Proof Trenches
                    Management.
                  </li>
                </ul>
                <h5 class="cardB-title">Tribal Welfare</h5>

                <ul>
                  <li>
                    To provide data pertaining to each tribe with respect to
                    their location, occupation, tribal crafts, Gender ratio,
                    education and other demographics.
                  </li>
                  <li>
                    To engage Tribal Communities in Afforestation programs by
                    identifying lands and optimal utilization of resources
                  </li>
                  <li>
                    To identify potential segments and markets for Tribal Crafts
                    and provide employment to tribes.
                  </li>
                  <li>
                    To train the tribes on smuggling and poaching patterns
                    discovery and prevention.
                  </li>
                  <li>
                    To deploy tribes in species recognition and other related
                    forestry works.
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

export default Forest;
