import React from "react";
// import resumeFile from "../documents/resume.pdf";
import { WorkProcessDetails } from "../config/dataConfig";


const WorkProcess = () => {


  return (
    <section id="process" className="section bg-body-tertiary">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5 wow fadeInUp">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">{WorkProcessDetails.heading.title}</h2>
            <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto" />
            <p className="text-4 text-muted">
              {WorkProcessDetails.heading.text}
            </p>
          </div>
        </div>
        {/* Heading End */}
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="row gy-5">
             {
              WorkProcessDetails.WDetails.map(({sno, name, desc})=>(
                <div key={name} className="col-md-6 wow fadeInUp">
                <div className="featured-box style-3">
                  <div className="featured-box-icon text-primary border border-primary border-3 rounded-circle">
                    {" "}
                    <span className="text-8 fw-600">{sno}</span>
                  </div>
                  <h3 className="text-5">{name}</h3>
                  <p className="text-muted mb-0">
                   {desc}
                  </p>
                </div>
              </div>
              ))
             }
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
