import React from "react";

const AboutMoreModal = () => {
  return (
    <div
      id="about-us-details"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">About Me More</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              I combine our passion for design focused in people with advanced
              development technologies.{" "}
              <strong className="fw-600">350+ clients</strong> have procured
              exceptional results and happiness while working with me.
            </p>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary">
                {" "}
                <i className="far fa-paper-plane" />
              </div>
              <h4>Our Mission</h4>
              <p>
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. lisque persius interesset his et, in quot quidam
                mea essent possim iriure.
              </p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary">
                {" "}
                <i className="far fa-eye" />
              </div>
              <h4>Our Vision</h4>
              <p>
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. lisque persius interesset his et, in quot quidam
                mea essent possim iriure.
              </p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary">
                {" "}
                <i className="far fa-thumbs-up" />
              </div>
              <h4>Our Goal</h4>
              <p>
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. lisque persius interesset his et, in quot quidam
                mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMoreModal;
