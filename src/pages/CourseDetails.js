import React, { useState, useEffect } from "react";
import "../Css/CourseDetails.css";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetails() {
  return (
    <div className="conner mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <div className="crd mb-3">
          <div className="crd-body">
            <h4 className="crd-title">Course Details</h4>
            <p className="crd-text">
              Find out the pacing options available, price, and more information
              about this Data Science Course at Sankhyana
            </p>

            <div className="d-flex flex-column align-items-start">
              <div className="mb-3">
                <h5>Curriculum Developed by:</h5>
                <p>Sankhyana Education</p>
              </div>
              <div className="mb-3">
                <h5>Duration:</h5>
                <p>6 Months</p>
              </div>
              <div className="mb-3">
                <h5>Mode:</h5>
                <p>Online Mode</p>
              </div>
              {/* <div className="mb-3">
                <h5>Tuition Fees:</h5>
              </div> */}
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/Training" className="btn btn-danger">
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
