import React from "react";
import SocialLinks from "../commonComponents/SocialLinks";

const Footer = () => {
  return (
    <footer id="footer" className="section bg-dark" data-bs-theme="dark">
      <div className="container wow fadeInUp">
        <ul className="social-icons social-icons-lg social-icons-muted justify-content-center mb-3">
          <SocialLinks />
        </ul>
       <div>
  <p className="text-muted text-center">
    Copyright © 2024 <a href="/">Kenil</a>. All Rights Reserved.
  </p>
  <ul className="nav text-2 justify-content-center">
    <li className="nav-item">
     
      <a className="nav-link" data-bs-toggle="modal" data-bs-target="#terms-policy" href="#terms-policy">
        Terms &amp; Policy
      </a>
    </li>
    <li className="nav-item">
     
      <a className="nav-link" data-bs-toggle="modal" data-bs-target="#disclaimer" href="#disclaimer">
        Disclaimer
      </a>
    </li>
  </ul>
</div>

      </div>
    </footer>
  );
};

export default Footer;
