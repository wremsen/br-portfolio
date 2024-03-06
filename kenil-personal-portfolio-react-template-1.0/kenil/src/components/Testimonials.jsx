import React from "react";
import { OurClientsDetails } from "../config/dataConfig";
import Slider from "react-slick";

const Testimonials = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-right"></i>
    </button>
  );

  var settings = {
    dots: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <section id="clients" className="section bg-body">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5 wow fadeInUp">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">{OurClientsDetails.heading.title}</h2>
            <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto" />
            <p className="text-4 text-muted">
             {OurClientsDetails.heading.text}
            </p>
          </div>
        </div>
        {/* Heading End */}
        <div className="row wow fadeInUp">
          <div className="col-lg-9 mx-auto">
            <Slider {...settings}>
             {
              OurClientsDetails.clients.map(({name, img, exp, summary})=>(
                <div key={name} className="item text-center px-5">
                <span className="text-9 text-muted opacity-3">
                  <i className="fa fa-quote-left" />
                </span>
                <p className="text-4">
                 {summary}
                </p>
                <img
                  className="img-fluid d-inline-block w-auto rounded-circle shadow-sm border"
                  src={img}
                  alt=""
                />
                <strong className="d-block fw-500">{name}</strong>
                <span className="text-muted text-2">
                 {exp}
                </span>
              </div>
              ))
             }
            
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
