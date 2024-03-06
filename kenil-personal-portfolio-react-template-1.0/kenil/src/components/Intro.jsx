import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import videobg from "../videos/home.mp4";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { lineParticles } from "../config/particlesConfig";
import { loadFull } from "tsparticles";
import {
  appliedConfig,
  introBackgroundConfig,
  scrollDuration,
} from "../config/commonConfig";
import { Link } from "react-scroll";
import { IntroSecDetails } from "../config/dataConfig";
import resumeFile from "../documents/resume.pdf";

const Intro = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      // await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesOptions = lineParticles;
  return (
    <section id="home">
      <div className="hero-wrap">
        {appliedConfig.appliedIntro === introBackgroundConfig.particles &&
          init && (
            <Particles
              className="hero-particles"
              style={{width: "100vw", height: "100vh"}}
              id="tsparticles"
              loaded={particlesLoaded}
              options={particlesOptions}
            />
          )}

        <div className={"hero-mask opacity-8  "+ (appliedConfig.isPrimaryBackground ? 'bg-primary' : 'bg-dark')} />
        {(appliedConfig.appliedIntro === introBackgroundConfig.image ||
          appliedConfig.appliedIntro === introBackgroundConfig.particles) && (
          <div
            className="hero-bg parallax"
            style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
          />
        )}
        {appliedConfig.appliedIntro === introBackgroundConfig.video && (
          <div className="player hero-bg">
            <video
              src={videobg}
              autoPlay
              muted
              loop
              style={{
                width: "100%",
                height: "100vh",
                minHeight: "100%",
                objectFit: "cover",
              }}
            ></video>
          </div>
        )}
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-5 text-uppercase text-white ls-4 mb-2 mb-md-3">
                  {IntroSecDetails.heading1}
                </p>
                <h2 className="text-17 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: IntroSecDetails.typeWritterHeadings,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <h2 className="text-17 fw-600 text-white mb-2 mb-md-3">
                  <span className="typed" />
                </h2>
                <p className="text-5 text-light">{IntroSecDetails.heading2}</p>
                <a
                  href={resumeFile}
                  download
                  className={ "btn  rounded-pill mt-3 " + (appliedConfig.isPrimaryBackground  ? 'btn-light' : 'btn-primary')}
                >
                  {IntroSecDetails.btnText}
                </a>
              </div>
            </div>
          </div>
          <Link
            to="about"
            spy
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
