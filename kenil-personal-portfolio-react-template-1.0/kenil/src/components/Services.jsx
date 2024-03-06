import React from "react";
import { ServicesDetails } from "../config/dataConfig";

const Services = () => {
  // services details
  return (
    <section id="services" className="section bg-body-tertiary">
      <div className="container">
        {/* Heading */}
        <div className="row mb-4 wow fadeInUp">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">{ServicesDetails.heading.title}</h2>
            <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto" />
            <p className="text-4 text-muted">
             {ServicesDetails.heading.text}
            </p>
          </div>
        </div>
        {/* Heading End */}
        <div className="row g-4">
        {
          ServicesDetails.details.map(({name, icon, desc}, index) =>(
              <div key={index} className="col-sm-6 col-lg-4 wow fadeInUp">
              <div className="featured-box bg-body text-center rounded shadow-sm py-5 px-4">
                <div className="featured-box-icon text-primary mt-2">
                  {" "}
                  <i className={icon} />{" "}
                </div>
                <h3 className="mb-3">{name}</h3>
                <p className="text-muted mb-0">
                {desc}
                </p>
              </div>
            </div>
          ))
        }
         
        </div>
      </div>
    </section>
  );
};

export default Services;
