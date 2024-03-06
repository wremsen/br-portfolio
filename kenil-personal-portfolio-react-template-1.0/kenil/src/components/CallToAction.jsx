import React from "react";
import { Link } from "react-scroll";
import { scrollDuration } from "../config/commonConfig";
import { CallToActionDetails } from "../config/dataConfig";

const CallToAction = () => {
  return (
    <section className="section bg-primary text-center">
      <div className="container wow zoomInDown">
        <p className="lead text-white">{CallToActionDetails.subHeading}</p>
        <h2 className="text-10 text-white mb-4">
          {CallToActionDetails.heading}
        </h2>
        <Link
          to="contact"
          spy
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          className="btn btn-light rounded-pill shadow-none smooth-scroll mt-2 wow rubberBand"
          data-wow-delay="1.2s"
        >
          {CallToActionDetails.btnText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
