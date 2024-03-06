import React, { useEffect, useState } from "react";
import SocialLinks from "../../commonComponents/SocialLinks";
import NavLinks from "../../commonComponents/NavLinks";
import { Link } from "react-scroll";
import { appliedConfig, scrollDuration } from "../../config/commonConfig";

const SideHeader = ({ appliedHeader }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  useEffect(() => {
    document.body.classList.add("side-header");

    return () => {
      document.body.classList.remove("side-header");
    };
  }, []);

  useEffect(() => {
    if(appliedConfig.isDarkHeader){
      document.getElementById('header').setAttribute('data-bs-theme', 'dark');
    }
  
    
  }, [])

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className={"primary-menu navbar navbar-expand-lg  "}>
        <div className="container position-relative h-100 flex-lg-column justify-content-lg-center px-3 p-lg-4">
          {/* Logo */}

          <Link
            to="home"
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            spy
            className="logo text-center d-lg-block mt-lg-3 mb-lg-4"
            title="Kenil Patel"
          >
            {" "}
            <img src={appliedConfig.isDarkHeader || appliedConfig.isDarkTheme ? "images/logo-light.png" : "images/logo.png"} alt="Kenil Patel" />{" "}
          </Link>
          {/* Logo End */}
          <hr className="d-none d-lg-block m-0 w-25" />

          <div
            id="header-nav"
            className={
              "collapse navbar-collapse w-100 " +
              (isNavModalClose ? " " : "show ")
            }
          >
            <ul className="navbar-nav my-lg-auto text-lg-center">
              <NavLinks
                appliedHeader={appliedHeader}
                setIsNavModalClose={setIsNavModalClose}
              />
            </ul>
          </div>
          <hr className="d-none d-lg-block m-0 w-25" />
          <ul className={"social-icons social-icons-sm mt-lg-4 d-none d-sm-flex " + (appliedConfig.isDarkHeader  || appliedConfig.isDarkTheme ? "social-icons-muted" : "")}>
            <SocialLinks />
          </ul>

          <button
            className={
              "navbar-toggler " + (isNavModalClose ? "collapsed" : "show")
            }
            onClick={() => {
              setIsNavModalClose(!isNavModalClose);
            }}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default SideHeader;
