import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/CourseDetails.css";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetails() {
  const [courseDetails, setCourseDetails] = useState({});

  // Get the 'cardId' from the URL using React Router's useParams
  const { card_id } = useParams();

  useEffect(() => {
    console.log("Off component mounted.");
    console.log("Card ID:", card_id);

    if (card_id) {
      // Make an API request to fetch course details based on the 'card_id'
      axios
        .get(
          `http://localhost/funda-service/admin/fetch_card_details.php?card_id=${card_id}`
        )
        .then((response) => {
          console.log("API Response:", response.data);
          if (Array.isArray(response.data) && response.data.length > 0) {
            setCourseDetails(response.data[0]);
          } else {
            console.error("No data found in the response.");
          }
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
        });
    }
  }, [card_id]);

  return (
    <div className="conner mt-3">
      <div
        className="d-flex justify-content-center align-items-center"
       
      >
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
                {courseDetails.curriculum}
              </div>
              <div className="mb-3">
                <h5>Duration:</h5>
                {courseDetails.duration}
              </div>
              <div className="mb-3">
                <h5>Mode:</h5>
                {courseDetails.mode}
              </div>
              <div className="mb-3">
                <h5>Tuition Fees:</h5>
                {courseDetails.tuition_fees}
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/Training" className="btn btn-danger" style={linkStyle}>
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  background: "maroon",
  color: "white",
  textDecoration: "none",
  padding: "8px 16px",
  border: "none",
  cursor: "pointer",
};

export default CourseDetails;
