import React, { useState } from "react";
import NavLinks from "../../commonComponents/NavLinks";
import { Link } from "react-scroll";
import SocialLinks from "../../commonComponents/SocialLinks";
import { scrollDuration } from "../../config/commonConfig";

const MenuPushOpenSideHeader = ({ appliedHeader }) => {
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
          "primary-menu navbar navbar-expand-none navbar-side-open bg-transparent text-3 border-bottom-0  " +
          (stickyHeader ? "sticky-on-top " : " ")
        }
      >
        <div className="container-fluid position-relative px-0">
          <div className="col-3 d-none d-sm-block">
            <ul className="social-icons social-icons-sm social-icons-light ms-2">
              <SocialLinks />
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-start justify-content-sm-center">
            {/* Logo */}
            <Link
              to="home"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              spy
              className="logo ms-3 ms-sm-0"
              title="Kenil Patel"
            >
              <img src="images/logo-light.png" alt="Kenil Patel" />{" "}
            </Link>
            {/* Logo End */}
          </div>
          <div className="col-3 navbar-accordion d-flex justify-content-end">
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
                "collapse navbar-collapse d-flex flex-column " +
                (isNavModalClose ? " " : "show ")
              }
            >
              <ul className="navbar-nav my-auto text-center">
                <NavLinks
                  appliedHeader={appliedHeader}
                  setIsNavModalClose={setIsNavModalClose}
                />
              </ul>
              <div className="mt-auto text-center text-2">
                <ul className="social-icons social-icons-sm social-icons-light justify-content-center">
                  <SocialLinks />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default MenuPushOpenSideHeader;
