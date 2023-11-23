// import React, { useEffect, useState } from "react";
// import { Carousel } from "react-bootstrap";
import React from "react";
import "../Css/CountR.css";

function CountR() {
  return (
    <>
      <section id="R1">
        <div class="rowR">
          <div class="colR">
            <h2>Permanent Staffing</h2>
            <img
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww"
              alt=""
            />
          </div>

          <div class="col2">
            <li>
              Permanent Staffing services include Executive Search, Talent
              Mapping, Campus Hiring, Contingent Hiring and Outplacement.
            </li>
            <br />
            <li>
              Our expertise in recruiting qualified, professional, and skilled
              employees is spread across a wide range of specialized domains
              like Semiconductor, Storage, Data Analytics, AI/ML, Enterprise
              Application Development and Telecom and Datacom Technologies.
            </li>
            <br />
            <li>
              We believe in spending quality time with our client organizations
              to understand their perspectives, and work through the process
              till the candidate is onboarded.
            </li>
            <br />
            <li>
              We dedicate our time to meet our candidates to understand their
              career aspirations and connect them with the available
              opportunities. Through quality assessment and mentoring, we match
              the best resources with the finest companies.
            </li>
            <br />
            <li>
              Our expertise in understanding technology has enabled us to find
              talents for niche requirements successfully.
            </li>
          </div>
        </div>
      </section>

      <section id="R2">
        <div class="rowR">
          <div class="col3 order-2 order-md-1">
            <li>
              Several areas of focus include maintaining business operations,
              adapting to flexible solutions, and adhering to legal
              requirements. Spectrum's business strategy addresses these
              concerns by developing process-oriented solutions.
            </li>
            <br />
            <li>
              Our expertise spans various sectors, delivering outcomes for both
              technical and non-technical white-collar needs.
            </li>
            <br />
            <li>
              With committed account managers, productivity tools, and a focus
              on employee engagement, we prioritize treating our contract staff
              as valuable contributors.
            </li>
            <br />
            <li>
              Our Contract Staffing services encompass aiding in sourcing,
              supporting induction, managing staffing contracts, payroll
              outsourcing, facilitating expat relocation, and process
              outsourcing.
            </li>
            <br />
            {/* <li>Our expertise in understanding technology has enabled us to find talents for niche requirements successfully.</li> */}
          </div>

          <div class="colR order-1 order-md-2">
            <h2>Contract Staffing</h2>
            <img
              src="https://img.freepik.com/free-photo/hiring-career-employment-human-resources-concept_53876-121273.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698537600&semt=ais"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="R3">
        <div class="rowR">
          <div class="colR">
            <h2>Campus Recruitment</h2>
            <img
              src="https://www.shutterstock.com/image-vector/hiring-announcement-scholar-vector-illustration-600nw-1734243857.jpg"
              alt=""
            />
          </div>
          <div class="col2">
            <li>
              Our Campus Recruitment offerings encompass activities before,
              during, after, and beyond the campus environment.
            </li>
            <br />
            <li>
              Our Campus Recruitment offerings encompass activities before,
              during, after, and beyond the campus environment. India boasts the
              world's third-largest reserve of technical talent, with a
              significant portion graduating from globally renowned educational
              institutions. Thorough research has been conducted on the talent
              pool's accessibility, spanning both technical and non-technical
              educational institutions.{" "}
            </li>
            <br />
            <li>
              {" "}
              Over the years, we have successfully implemented numerous
              recruitment initiatives targeting entry-level positions in
              esteemed technical institutions.
            </li>
          </div>
        </div>
      </section>
    </>
  );
}

export default CountR;
