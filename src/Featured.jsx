import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import pimage from "./lahore.jpg";
import project1 from "./PROJECT1.png";
import project2 from "./PROJECT2.png";
import project3 from "./PROJECT3.png";
import project4 from "./PROJECT4.png";

function Featured() {
  const projects = [
    {
      id: 1,
      image: project1,
      heading: "Polyp Segmentation using deep learning",
      paragraph:
        "This project is about finding the colorectal cancer inside large intestine of human body and detect the abnormal growth",
    },
    {
      id: 2,
      image: project2,
      heading: "Memories (MERN)",
      paragraph:
        "Developed a full-stack project for past Memories with Node js, MongoDB, Express js and React js making it more realistic and user-experience level enhanced.",
    },
    {
      id: 3,
      image: project3,
      heading: "Moviedesk (full-stack)",
      paragraph:
        " Developed a MovieDesk project, utilizing the Node js, mySQL, Express js and React js to ensure efficient data storage & user-experience.",
    },

    {
      id: 4,
      image: project4,
      heading: "Last Memory (Frontend)",
      paragraph:
        " Designed a website design for online business.  Making User Interface  more friendly and enhancing a user experience.",
    },
  ];
  return (
    <>
      {/* <div className="container px-4 py-5" id="featured-3">
        <h2
          className="pb-2 border-bottom"
          style={{ color: "rgb(0, 52, 107)", fontWeight: "bold" }}
        >
          Featured Projects
        </h2>
        <div className="row flex-row flex-nowrap g-3 overflow-auto py-4">
          <div className="feature col spcBt">
            <div className="feature-icon d-inline-flex align-items-center bg-gradient fs-2 mb-3">
              <img src={pimage} alt="" style={{ width: "100%" }} />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Polyp Segmentation using deep learning
            </h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Details
              <svg className="bi">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <div className="feature col spcBt">
            <div className="feature-icon d-inline-flex align-items-center bg-gradient fs-2 mb-3">
              <img src={pimage} alt="" style={{ width: "100%" }} />
            </div>
            <h3 className="fs-2 text-body-emphasis">Movie Desk</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Details
              <svg className="bi">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <div className="feature col spcBt">
            <div className="feature-icon d-inline-flex align-items-center bg-gradient fs-2 mb-3">
              <img src={pimage} alt="" style={{ width: "100%" }} />
            </div>
            <h3 className="fs-2 text-body-emphasis">Portfolio website</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Details
              <svg className="bi">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <div className="feature col spcBt">
            <div className="feature-icon d-inline-flex align-items-center bg-gradient fs-2 mb-3">
              <img src={pimage} alt="" style={{ width: "100%" }} />
            </div>
            <h3 className="fs-2 text-body-emphasis">Portfolio website</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Details
              <svg className="bi">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div> */}

      <div className="container px-4 py-5" id="featured-3">
        <h2
          className="pb-2 border-bottom"
          style={{ color: "rgb(0, 52, 107)", fontWeight: "bold" }}
        >
          Featured Projects
        </h2>
        <div className="row flex-row flex-nowrap g-3 overflow-auto py-4 feature-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className="feature col spcBt"
              style={{ margin: "0 1.6rem" }}
            >
              <div className="feature-icon d-inline-flex align-items-center bg-gradient fs-2 mb-3">
                <img src={project.image} alt="" style={{ maxWidth: "20rem" }} />
              </div>
              <h3
                className="fs-5 text-body-emphasis"
                style={{ maxWidth: "20rem" }}
              >
                {project.heading}
              </h3>
              <p style={{ maxWidth: "20rem" }}>{project.paragraph}</p>
              <a href="#" className="icon-link">
                Details
                <svg className="bi">
                  <use href="#chevron-right"></use>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Featured;
