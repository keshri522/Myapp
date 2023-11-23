import React from "react";
import "../Css/Sas.css";
import img22 from "../Images/Sas1.png";

function About() {
  return (
    <>
      <section id="Off" className="Off2">
        <img src={img22} alt="" className="img-off" />
      </section>

      <section id="off1" className="off1">
        <div class="row">
          <div class="col-sm-6">
            <div class="cardO">
              <div class="cardO-body">
                <h5 class="cardO-title">Why you choose us?</h5>
                <p class="cardO-text"> </p>
                <h5 class="cardO-title"></h5>
                <ul>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> SAS Accredited
                    Training Centre
                  </li>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> SAS Authentic
                    Software
                  </li>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> SAS Certified
                    Trainers(with hands-on industry experience)
                  </li>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> 100 % Real -
                    Time Job Oriented Training
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cardO">
              <div class="cardO-body">
                <p class="cardO-text"> </p>
                <h5 class="cardO-title"></h5>
                <ul>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> Train & Place
                    Working Model with placement assistance
                  </li>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> Traditional
                    Training Technique
                  </li>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> SAS Authentic
                    Curriculum
                  </li>
                  <li>
                    <span class="checkmark-icon">&#10003;</span> Digital Badge
                    (Digitally engraved Credentials)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="off2" className="off2">
        <div class="row">
          <div class="col-sm-12">
            <div class="caO">
              <div class="caO-body">
                <h5 class="caO-title">Enquiry Here For IN-HOUSE Trainings</h5>
                <button
                  type="button"
                  class="btn btn-Light float-right"
                >
                   
                  <a href="/support">Click NOW</a>
          
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="off3" className="off3">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="cd hovercard">
                <div class="cdheader"></div>
                <div class="avatar">
                  <img
                    alt=""
                    src="https://st2.depositphotos.com/13315760/48136/v/450/depositphotos_481366830-stock-illustration-tech-shield-security-logo-design.jpg"
                  />
                </div>
                <div class="info">
                  <div class="title">
                    <a target="_blank" href="">
                      Security
                    </a>
                  </div>
                  <div class="desc">
                    Security measures may include the use of technology,
                    policies, procedures, and training to mitigate potential
                    threats and vulnerabilities.
                  </div>
                  {/* <div class="desc">Curious developer</div>
                  <div class="desc">Tech geek</div> */}
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cd hovercard">
                <div class="cdheader"></div>
                <div class="avatar">
                  <img
                    alt=""
                    src="https://www.shutterstock.com/image-vector/lock-tech-logo-design-template-260nw-1035175594.jpg"
                  />
                </div>
                <div class="info">
                  <div class="title">
                    <a target="_blank" href="">
                      Privacy
                    </a>
                  </div>
                  <div class="desc">
                    Communicating clearly with individuals about how their data
                    is collected, used, and stored by the business.
                  </div>
                  {/* <div class="desc">Curious developer</div>
                  <div class="desc">Tech geek</div> */}
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cd hovercard">
                <div class="cdheader"></div>
                <div class="avatar">
                  <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNynDfkkuHyNid3cxW3dBWeaXx7wa-xpQkEA&usqp=CAU"
                  />
                </div>
                <div class="info">
                  <div class="title">
                    <a target="_blank" href="">
                      Compliance
                    </a>
                  </div>
                  <div class="desc">
                    Conforming to established standards and best practices
                    within the industry to ensure quality, safety, and
                    reliability.
                  </div>
                  {/* <div class="desc">Curious developer</div>
                  <div class="desc">Tech geek</div> */}
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cd hovercard">
                <div class="cdheader"></div>
                <div class="avatar">
                  <img
                    alt=""
                    src="data:image/jpeg;base64,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"
                  />
                </div>
                <div class="info">
                  <div class="title">
                    <a target="_blank" href="">
                      Quality
                    </a>
                  </div>
                  <div class="desc">
                    Quality in a business context refers to the standard of
                    excellence or superiority in products, services, processes,
                    and overall operations.
                  </div>
                  {/* <div class="desc">Curious developer</div>
                  <div class="desc">Tech geek</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      {/* <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Sign In
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="inputPassword4">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default About;
