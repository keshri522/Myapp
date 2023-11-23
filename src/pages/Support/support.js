import React, { useState } from "react";
import axios from "axios";
import "../../pages/Support/support.css";
import SupportData from "../../Component/ApiFunctions/PostApi";
function Sup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const [activeCardT, setActiveCardT] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedServices = [...formData.services];
      if (checked) {
        updatedServices.push(value);
      } else {
        const index = updatedServices.indexOf(value);
        if (index !== -1) {
          updatedServices.splice(index, 1);
        }
      }
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // const handleServiceChange = (e) => {
  //   setFormData({ ...formData, selectedService: e.target.value });
  // };

  const handleServiceChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      services: [value], // Update the services array with the selected value
      selectedService: value, // Update selectedService as well
    });
  };

  // const handleCardTClick = (cardT) => {
  //   setFormData({ ...formData, activeCardT: cardT });
  // };

  const handleCardTClick = (cardT) => {
    setActiveCardT(cardT); // Use setActiveCardT to update the state
    setFormData({ ...formData, activeCardT: cardT }); // Also update formData if needed
  };

  const handleSubmit = async (e) => {
    console.log(formData, activeCardT);
    e.preventDefault();
    try {
      const response = await SupportData(formData, activeCardT);
      if (response.data.success) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
          services: [],
        });
        alert("Form submitted successfully");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Network Error: " + error.message);
    }
  };

  return (
    <>
      {/* Your existing JSX code */}
      <div className="scontainer">
        {/* ... (rest of the code remains unchanged) */}

        <div className="bg-light">
          <div className="row">
            <div className="col-lg-8 col-md-12 p-5 bg-white rounded-3">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className={`cardT ${
                      activeCardT === "Training" ? "active" : ""
                    }`}
                    onClick={() => handleCardTClick("Training")}
                  >
                    <div className="cardT-body">
                      <h5 className="cardT-title">TRAINING</h5>
                      {/* Add your cardT links here */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className={`cardT ${
                      activeCardT === "Analytics" ? "active" : ""
                    }`}
                    onClick={() => handleCardTClick("Analytics")}
                  >
                    <div className="cardT-body">
                      <h5 className="cardT-title">ANALYTICS</h5>
                      <p className="cardT-text"></p>
                      {/* Add your cardT links here */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className={`cardT ${
                      activeCardT === "Consultancy" ? "active" : ""
                    }`}
                    onClick={() => handleCardTClick("Consultancy")}
                  >
                    <div className="cardT-body">
                      <h5 className="cardT-title">CONSULTANCY</h5>
                      <p className="cardT-text"></p>
                      {/* Add your cardT links here */}
                    </div>
                  </div>
                </div>
                {activeCardT === "Training" && (
                  <form className="row mb-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="first name"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Add input fields for Training form */}
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="last name"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="E-mail"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md">
                      <textarea
                        required
                        placeholder="Message Type Here"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        cols="30"
                        rows="1"
                      ></textarea>
                    </div>
                    <div className="col-md-12 g-4">
                      <div class="dropdown">
                        <h5>What service You need ?</h5>
                        <select
                          className="select form-control-lg my-2"
                          onChange={handleServiceChange}
                        >
                          <option value="1">Choose Option For Training</option>
                          <optgroup label="SAS Courses">
                            <option value="Base SAS">Base SAS</option> //
                            <option value="Clinic SAS">Clinic SAS</option>
                            <option value="Advance SAS">Advance SAS</option>
                            <option value="Viya SAS">Viya SAS</option>
                          </optgroup>
                          <optgroup label="Data Science Course">
                            <option value="Data Mining with Python">
                              Data Mining with Python
                            </option>
                            <option value="Statistics with Python">
                              Statistics with Python
                            </option>
                            <option value="Artificial Intelligence">
                              Artificial Intelligence
                            </option>
                          </optgroup>
                          <optgroup label="Full Stack Courses">
                            <option value="Real-time projects">
                              Real-time projects
                            </option>
                            <option value="Gain Problem-solving skills">
                              Gain Problem-solving skills
                            </option>
                            <option value="Improved hiring potential">
                              Improved hiring potential
                            </option>
                            <option value="Frontend and Backend Tools">
                              Frontend and Backend Tools
                            </option>
                          </optgroup>
                          <optgroup label="Intership">
                            <option value="Clinical SAS">Clinical SAS</option>
                            <option value="Full Stack Developer">
                              Full Stack Developer
                            </option>
                            <option value="Finance Intern">
                              Finance Intern
                            </option>
                            <option value="Data Engineer">Data Engineer</option>
                          </optgroup>
                          <optgroup label="Others"></optgroup>
                        </select>
                      </div>
                    </div>
                    <div className="text-end mt-4">
                      <input
                        className="btn px-4 py-3 btn-outline-dark"
                        type="submit"
                        value="Send Message"
                      />
                    </div>
                  </form>
                )}
                {activeCardT === "Analytics" && (
                  <form className="row mb-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="first name"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Add input fields for Analytics form */}
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="last name"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="E-mail"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md">
                      <textarea
                        required
                        placeholder="Message Type Here"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        cols="30"
                        rows="1"
                      ></textarea>
                    </div>
                    <div className="col-md-12 g-4">
                      <div class="dropdown">
                        <h5>What service You need ?</h5>
                        <select
                          class="select form-control-lg my-2"
                          onChange={handleServiceChange}
                        >
                          <option value="1">Choose option for Analytics</option>
                          <option value="Banking">Banking</option>
                          <option value="Financial Services">
                            Financial Services
                          </option>
                          <option value="Cloud Service">Cloud Service</option>
                          <option value="Data & Analytics">
                            Data & Analytics
                          </option>
                          <option value="Automative">Automative</option>
                          <option value="Retail">Retail</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Life Science">Life Science</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Insurance">Insurance</option>
                          <option value="Energy">Energy</option>
                          <option value="Forest">Forest</option>
                          <option value="Consulting & Outsourcing">
                            Consulting & Outsourcing
                          </option>
                          <option value="Government">Government</option>
                        </select>
                      </div>
                    </div>
                    <div className="text-end mt-4">
                      <input
                        className="btn px-4 py-3 btn-outline-dark"
                        type="submit"
                        value="Send Message"
                      />
                    </div>
                  </form>
                )}
                {activeCardT === "Consultancy" && (
                  <form className="row mb-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="first name"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Add input fields for Consultancy form */}
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="last name"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="E-mail"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 p-3">
                      <input
                        required
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md">
                      <textarea
                        required
                        placeholder="Message Type Here"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        cols="30"
                        rows="1"
                      ></textarea>
                    </div>

                    <div className="col-md-12 g-4">
                      <div class="dropdown">
                        <h5>What service You need ?</h5>
                        <select
                          class="select form-control-lg my-2"
                          onChange={handleServiceChange}
                        >
                          <option value="1">
                            Choose option for Consultancy
                          </option>
                          <option value="2">Permanent Staffing</option>
                          <option value="3">Contract Staffing</option>
                          <option value="4">Campus Recruitment</option>
                          <option value="5">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="text-end mt-4">
                      <input
                        className="btn px-4 py-3 btn-outline-dark"
                        type="submit"
                        value="Send Message"
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-white aside px-4 py-5">
              <div className="mb-5">
                <h1 className="h3">Contact Information</h1>
                <p className="opacity-50">
                  <small>
                    Fill out the form, and we will get back to you within 24
                    hours
                  </small>
                </p>
              </div>
              <div className="d-flex flex-column px-0">
                <ul className="m-0 p-0">
                  <li className="d-flex justify-content-start align-items-center mb-4">
                    <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <span>+91-8048147185/86</span>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                      <i className="fa-regular fa-message"></i>
                    </span>
                    <span>info@sankhyana.com</span>
                  </li>
                  <li className="d-flex justify-content-start align-items-center mb-4">
                    <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                      <i className="fa-solid fa-house"></i>
                    </span>
                    <span>
                      <h6>
                        <u>Head Office</u>
                      </h6>
                      Address: #1678,
                      <br />
                      2nd Floor 'A' 60 Feet,
                      <br />
                      Nehru Road Opp HDFC ATM,
                      <br />
                      Near Kullappa Circle,
                      <br />
                      Kammanahalli
                      <br />
                      Bengaluru-560084
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-12">
        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117223.77996815204!2d85.3213263!3d23.3432048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b5a9b0042eef56!2sourcita.com!5e0!3m2!1sen!2sin!4v1589706571407!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
              <i className="fa fa-map-marker"></i>
            </a>
            <h6>
              <u>Branch Office</u>
            </h6>
            <p>
              Branch office: 1188,
              <br />
              HNR Tower, 4th Floor, 24th Main,
              <br />
              Near Parangipalya Bus Stop Above Udupi Palace,
              <br />
              2nd Sector, HSR Layout
              <br />
              Bengaluru-560102
            </p>
          </div>
          <div className="col-md-4">
            <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
              <i className="fa fa-map-marker"></i>
            </a>
            <h6>
              <u>Bihar Office</u>
            </h6>
            <p>
              Amber Hotel,
              <br />
              2nd Floor,
              <br />
              Station Road,
              <br />
              Dehri-On-Sone,
              <br />
              Rohtas (Bihar)
            </p>
          </div>

          <div className="col-md-4">
            <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
              <i className="fa fa-map-marker"></i>
            </a>
            <h6>
              <u>Kenya Office</u>
            </h6>
            <p>Your Address …..</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sup;
