import React, { useState } from "react";
import { MyWorking_Skills } from "../config/dataConfig";
import ModalVideo from "react-modal-video";

const Skills = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  return (
    <section id="why-choose" className="section">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5 wow fadeInUp">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">{MyWorking_Skills.heading.title}</h2>
            <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto" />
            <p className="text-4 text-muted">{MyWorking_Skills.heading.text}</p>
          </div>
        </div>
        {/* Heading End */}
        <div className="row justify-content-center gy-5">
          {MyWorking_Skills.working.map(({ name, icon, desc }) => (
            <div key={name} className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="featured-box style-3">
                <div className="featured-box-icon text-primary border rounded-circle">
                  <i className={icon} />
                </div>
                <h3>{name}</h3>
                <p className="text-muted mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row gy-5 mt-0">
          <div className="col-md-6 col-lg-6 text-center wow fadeInUp">
            <div className="hero-wrap section h-100 rounded shadow-lg p-5">
              <div className="hero-mask opacity-6 bg-dark rounded" />
              <div
                className="hero-bg hero-bg-scroll rounded"
                style={{ backgroundImage: 'url("./images/why-choose.jpg")' }}
              />
              <div className="hero-content h-100 d-flex flex-column align-items-center justify-content-center py-5">
                <button
                  onClick={() => setShowModalVideo(true)}
                  className="btn-video-play popup-youtube "
                  href={MyWorking_Skills.video.vdo}
                >
                  <i className="fas fa-play" />
                </button>
                <p className="text-white fw-500 text-uppercase mt-3 mb-0">
                  Play &amp; Watch!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 align-self-center wow fadeInUp">
            <div className="px-lg-4">
              <h3 className="text-6 mb-3">My Skills</h3>
              <p className="text-muted">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
              {MyWorking_Skills.skills.map(({ skill, percent }, index) => (
                <React.Fragment key={index}>
                  <p className="fw-500 text-start mb-2">
                    {skill}
                    <span className="float-end">{percent}%</span>
                  </p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${percent}%` }}
                      aria-valuenow={percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModalVideo && (
        <ModalVideo
          channel={"youtube"}
          autoplay
          isOpen={showModalVideo}
          videoId={"7e90gBu4pas"}
          onClose={() => setShowModalVideo(false)}
        />
      )}
    </section>
  );
};

export default Skills;
