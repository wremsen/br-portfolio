import React, { useEffect, useState } from "react";
import NavLinks from "../../commonComponents/NavLinks";
import { Link } from "react-scroll";
import { appliedConfig, scrollDuration } from "../../config/commonConfig";

const BottomHeader = ({ appliedHeader }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  useEffect(() => {
    if(appliedConfig.isDarkHeader){
      document.getElementById('header').setAttribute('data-bs-theme', 'dark');
    }
  
    
  }, [])

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav
        className={"primary-menu bottom-header navbar navbar-expand-lg position-relative  "}
      >
        <div className="container">
          {/* Logo */}
          <Link
            to="home"
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            spy
            className="logo ms-3 ms-md-0"
            title="Kenil Patel"
          >
            <img src={appliedConfig.isDarkHeader || appliedConfig.isDarkTheme ? "images/logo-light.png" : "images/logo.png"} alt="Kenil Patel" />
          </Link>
          {/* Logo End */}
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
          <div
            id="header-nav"
            className={
              "collapse navbar-collapse justify-content-end " +
              (isNavModalClose ? " " : "show ")
            }
          >
            <ul className="navbar-nav">
              <NavLinks
                appliedHeader={appliedHeader}
                setIsNavModalClose={setIsNavModalClose}
              />
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default BottomHeader;
