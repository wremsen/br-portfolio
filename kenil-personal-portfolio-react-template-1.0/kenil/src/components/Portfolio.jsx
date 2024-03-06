import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    DETAILED: "Details",
    MOCKUPS: "Mockups",
    YOUTUBE: "Youtube Videos",
    VIMEO: "Vimeo Videos",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "Detailed Project 1",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
          name: "www.example.com",
          link: "https://www.example.com",
        },

        sliderImages: [
          "images/projects/project-2.jpg",
          "images/projects/project-5.jpg",
        ],
      },

      thumbImage: "images/projects/project-1.jpg",

      categories: [filters.DETAILED],
    },
    {
      title: "Mockups Design 1",
      type: types.IMAGE,

      thumbImage: "images/projects/project-2.jpg",

      categories: [filters.MOCKUPS],
    },
    {
      title: "YouTube Video",
      type: types.VIDEO,
      video: {
        vimeo: false,
        id: "PMNnEEEacCg",
      },
      thumbImage: "images/projects/project-3.jpg",

      categories: [filters.YOUTUBE],
    },
    {
      title: "Vimeo Video",
      type: types.VIDEO,
      video: {
        vimeo: true,
        id: "259411563",
      },

      thumbImage: "images/projects/project-4.jpg",
      categories: [filters.VIMEO],
    },
    {
      title: "Detailed Project 2",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
          name: "www.example.com",
          link: "https://www.example.com",
        },
        sliderImages: [
          "images/projects/project-1.jpg",
          "images/projects/project-2.jpg",
        ],
      },
      thumbImage: "images/projects/project-5.jpg",
      categories: [filters.DETAILED],
    },
    {
      title: "Mockups Design 2",
      type: types.IMAGE,

      thumbImage: "images/projects/project-6.jpg",

      categories: [filters.MOCKUPS],
    },
    {
      title: "Mockups Design 3",
      type: types.IMAGE,

      thumbImage: "images/projects/project-7.jpg",

      categories: [filters.MOCKUPS],
    },
    {
      title: "Detailed Project 3",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
          name: "www.example.com",
          link: "https://www.example.com",
        },
        sliderImages: [
          "images/projects/project-1.jpg",
          "images/projects/project-2.jpg",
        ],
      },
      thumbImage: "images/projects/project-8.jpg",
      categories: [filters.DETAILED],
    },
    {
      title: "Vimeo Video",
      type: types.VIDEO,
      video: {
        vimeo: true,
        id: "259411563",
      },

      thumbImage: "images/projects/project-9.jpg",
      categories: [filters.VIMEO],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, [isRtl]);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section"}>
        <div className={"container"}>
          {/* Heading */}
          <div className="row mb-5 wow fadeInUp">
            <div className="col-lg-9 col-xl-8 mx-auto text-center">
              <h2 className="fw-600 mb-3">Our Best Works</h2>
              <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto" />
              <p className="text-4 text-muted">
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with Me.
              </p>
            </div>
          </div>

          {/* Heading end*/}
          {/* Filter Menu */}
          <ul className="portfolio-menu nav nav-pills text-uppercase justify-content-center border-bottom-0 mb-5 wow fadeInUp">
            <li className="nav-item">
              <button
                className={
                  "nav-link rounded-pill " + (filterKey === "*" ? "active" : "")
                }
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link rounded-pill " +
                    (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 "></button>
                          <div className="portfolio-overlay-details">
                            <p className="text-white text-6">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                            </p>
                            <h5 className="text-white fw-400">
                              {project?.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
