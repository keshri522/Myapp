import React, { useState, useEffect } from "react";
import "../Css/Int.css";
import { Link } from "react-router-dom";

import img3 from "../Images/course1.png";

function Int() {
  return (
    <div className="container-fluid">
      <div className="row content">
        {/* <div className="col-sm-3 sidenav hidden-xs"> */}
        {/* <b>Educations</b> */}
        {/* <div className="wrapper">
            <select size="2" name="" id="" className="form-control">
              <option value="">DataMining with PYTHON</option>
              <option value="">Artificial Intelligence</option>
              <option value="">Artificial Intelligence</option>
              <option value="">Machine Learning</option>
             
            </select>

            <b>Skills</b>
            <select size="4" name="" id="" className="form-control">
              <option value="">One</option>
              <option value="">Two</option>
              <option value="">Three</option>
              <option value="">Four</option>
              <option value="">Five</option>
            </select>
          </div> */}
        {/* </div> */}

        <div className="col-sm-12 col-md-12">
          <div className="well2">
            <h4>Sankhyana Cataloge for Data Sceince</h4>
            <p>
              Follow guided learning paths at your own pace or sign up for
              expert-led classes.
            </p>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="well">
                <img src={img3} className="img-fluid small-image" alt="" />

                <p>DataMining with PYTHON</p>
                <a href="/CourseDetails" alt="">
                  View
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="well">
                <img src={img3} className="img-fluid small-image" alt="" />

                <p>Statics with PYTHON</p>
                <a href="/CourseDetails" alt="">
                  View
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="well">
                <img src={img3} className="img-fluid small-image" alt="" />

                <p>Artificial Intelligence</p>
                <a href="/CourseDetails" alt="">
                  View
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="well">
                <img src={img3} className="img-fluid small-image" alt="" />

                <p>Machine Learning</p>
                <a href="/CourseDetails" alt="">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Int;
