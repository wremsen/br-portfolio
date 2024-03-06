import "./App.scss";
import WOW from "wowjs";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { appliedConfig, headerConfig } from "./config/commonConfig";
import { Tooltip } from "./components/Tooltip";
import CallToAction from "./components/CallToAction";
import Skills from "./components/Skills";
import WorkProcess from "./components/workProcess";
import Clients from "./components/Clients";
import DefaultHeader from "./components/headers/DefaultHeader";
import SideHeader from "./components/headers/SideHeader";
import ClassicHeader from "./components/headers/ClassicHeader";
import MenuPushOpenSideHeader from "./components/headers/MenuPushOpenSideHeader";
import OverlayMenu from "./components/headers/OverlayMenu";
import Intro from "./components/Intro";
import BottomHeader from "./components/headers/BottomHeader";
import DisclaimerModal from "./components/DisclaimerModal";
import TermsAndConditionModal from "./components/TermsAndConditionModal";
import AboutMoreModal from "./components/AboutMoreModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const appliedHeader = appliedConfig.appliedHeader;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    if (appliedConfig.isFrameLayout) {
      document.body.classList.add("box-framed");
    }
    if(appliedConfig.isDarkTheme){
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }

    
    new WOW.WOW({
      live: false,
    }).init();

    return () => {
      if (appliedConfig.isFrameLayout) {
        document.body.classList.remove("box-framed");
      }
    };
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  const getHeader = () => {
    if (appliedHeader === headerConfig.Classic) {
      return <ClassicHeader appliedHeader={appliedHeader}></ClassicHeader>;
    } else if (appliedHeader === headerConfig.Default) {
      return <DefaultHeader appliedHeader={appliedHeader}></DefaultHeader>;
    } else if (appliedHeader === headerConfig.MenuPushOpenSideHeader) {
      return (
        <MenuPushOpenSideHeader
          appliedHeader={appliedHeader}
        ></MenuPushOpenSideHeader>
      );
    } else if (appliedHeader === headerConfig.OverlayMenu) {
      return <OverlayMenu appliedHeader={appliedHeader}></OverlayMenu>;
    } else if (appliedHeader === headerConfig.SideHeader) {
      return <SideHeader appliedHeader={appliedHeader}></SideHeader>;
    } else {
      return <DefaultHeader appliedHeader={appliedHeader}></DefaultHeader>;
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        {appliedConfig.isFrameLayout && (
          <div class="frame-outer">
            <div class="frame-top"></div>
            <div class="frame-end"></div>
            <div class="frame-bottom"></div>
            <div class="frame-start"></div>
          </div>
        )}
        <div id="main-wrapper">
          {appliedConfig.appliedHeader !== headerConfig.BottomHeader &&
            getHeader()}

          {appliedConfig.appliedHeader === headerConfig.BottomHeader && (
            <>
              <Intro />
              <BottomHeader appliedHeader={appliedHeader} />
            </>
          )}

          <div id="content" role="main">
            {appliedConfig.appliedHeader !== headerConfig.BottomHeader && (
              <Intro />
            )}
            {/* {appliedTheme === themeConfig.FullScreenMenu &&
              getFullScreenIntro()}
            {appliedTheme === themeConfig.StandardMenu &&
              getStandardMenuIntro()} */}

            <AboutUs></AboutUs>
            <Services></Services>
            <Skills></Skills>
            <CallToAction></CallToAction>
            <Portfolio></Portfolio>
            <WorkProcess></WorkProcess>
            <Testimonials></Testimonials>
            <Clients></Clients>
            <Contact></Contact>
          </div>
          <Footer handleNavClick={handleNavClick}></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fas fa-arrow-up"></i>
          </span>
        </Tooltip>

        <DisclaimerModal />
        <TermsAndConditionModal />
        <AboutMoreModal />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
