import React from "react";
import { appliedConfig, headerConfig, scrollDuration } from "../config/commonConfig";
import { Link } from "react-scroll";

const NavLinks = ({ appliedHeader, setIsNavModalClose }) => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link "
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
          to="home"
          offset={-71}
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
          to="about"
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
          to="services"
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
          to="why-choose"
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          Why Choose
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
          to="portfolio"
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
          to="process"
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          Process
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          smooth="easeInOutQuint"
          duration={scrollDuration}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
          to="clients"
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          Clients
        </Link>
      </li>
      {appliedHeader === headerConfig.Default ||
      appliedHeader === headerConfig.BottomHeader || appliedHeader === headerConfig.Classic ? (
        <li className="align-items-center h-auto ms-lg-3">
          <Link
            className={
              "btn shadow-none d-inline-block rounded-pill mt-3 mt-lg-0  " +
              ((appliedHeader === headerConfig.BottomHeader || appliedHeader === headerConfig.Classic) && !(appliedConfig.isDarkHeader || appliedConfig.isDarkTheme)
                ? "btn-outline-dark"
                : "btn-outline-light")
            }
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            activeClass="active"
            spy
            to="contact"
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            Contact
          </Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link
            className="nav-link "
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            activeClass="active"
            spy
            to="contact"
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            Contact
          </Link>
        </li>
      )}
    </>
  );
};

export default NavLinks;
