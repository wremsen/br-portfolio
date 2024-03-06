import React, { useState } from "react";
import NavLinks from "../../commonComponents/NavLinks";
import { Link } from "react-scroll";
import { scrollDuration } from "../../config/commonConfig";

const OverlayMenu = ({ appliedHeader }) => {
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
    <header id="header" className="sticky-top" data-bs-theme="dark">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-none navbar-overlay bg-transparent border-bottom-0 text-5 fw-500  " +
          (stickyHeader ? "sticky-on-top " : " ")
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
            className="logo"
            title="Kenil Patel"
          >
            <img src="images/logo-light.png" alt="Kenil Patel" />{" "}
          </Link>
          {/* Logo End */}
          <button
            className={
              "navbar-toggler ms-auto " +
              (isNavModalClose ? "collapsed" : "show")
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
              "collapse navbar-collapse " + (isNavModalClose ? " " : "show ")
            }
          >
            <div className="d-flex h-100 align-items-center justify-content-center">
              <ul className="navbar-nav">
                <NavLinks
                  appliedHeader={appliedHeader}
                  setIsNavModalClose={setIsNavModalClose}
                />
              </ul>
            </div>
          </div>
          <Link
            to="contact"
            spy
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            className="btn btn-outline-light btn-sm shadow-none smooth-scroll ms-3"
          >
            Hire Me
          </Link>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default OverlayMenu;
