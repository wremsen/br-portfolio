import React, { useState } from "react";
import { Link } from "react-scroll";
import { appliedConfig, headerConfig, scrollDuration } from "../../config/commonConfig";
import NavLinks from "../../commonComponents/NavLinks";

const DefaultHeader = ({ appliedHeader }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <header id="header" className="sticky-top-slide" data-bs-theme="dark">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg bg-transparent border-bottom-0  " +
          (stickyHeader ? "sticky-on " : " ") + (appliedConfig.isPrimaryBackground && appliedHeader === headerConfig.Default ? 'navbar-default-active ' : " ")
        }
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
            <img src="images/logo-light.png" alt="Kenil Patel" />{" "}
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

export default DefaultHeader;
