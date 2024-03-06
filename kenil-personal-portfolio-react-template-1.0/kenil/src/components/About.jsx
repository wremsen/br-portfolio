import React from "react";

import { AboutSecDetails } from "../config/dataConfig";
import { Link } from "react-scroll";
import { scrollDuration } from "../config/commonConfig";

const AboutUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-center mb-5 mb-lg-0 wow fadeInUp">
            <img
              className="img-fluid shadow-md rounded d-inline-block"
              src="images/about-me.jpg"
              title="I'm Kenil Patel"
              alt=""
            />
          </div>
          <div
            className="col-lg-7 text-center text-lg-start ps-lg-4 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2 className="fw-600 mb-4">
              {AboutSecDetails.information.title1}
            </h2>
            <h3 className="text-6 mb-4">
              Hello!
              <span className="text-primary fw-600">
                {" "}
                I'm {AboutSecDetails.information.name}.
              </span>
            </h3>
            <p>{AboutSecDetails.information.desc1}</p>
            <p>{AboutSecDetails.information.desc2}</p>
            <div className="brands-grid separator-border my-sm-4">
              <div className="row">
                {AboutSecDetails.moreAbout.map(({ num, title }, index) => (
                  <div className="col-sm-4 py-4 py-sm-2" key={index}>
                    <div className="featured-box text-center">
                      <h4 className="text-8 text-light-emphasis mb-0">
                        <span className="counter" data-from={0} data-to={10}>
                          {num}
                        </span>
                        +
                      </h4>
                      <p className="mb-0">{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              className="btn btn-secondary rounded-pill mt-3"
              data-bs-toggle="modal"
              data-bs-target="#about-us-details"
              href="#about-us-details"
            >
              About more
            </a>
            <Link
              to="portfolio"
              spy
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              className="btn btn-link smooth-scroll mt-3 px-4"
            >
              Discover My Work
              <span className="text-1 ms-2">
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
