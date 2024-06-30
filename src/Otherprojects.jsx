import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import pimage from "./lahore.jpg";
import project1 from "./PROJECT1.png";
import project2 from "./PROJECT2.png";
import project3 from "./PROJECT3.png";
import project4 from "./PROJECT4.png";
import project5 from "./PROJECT5.png";
import project6 from "./PROJECT6.png";
import project7 from "./PROJECT7.png";
import project8 from "./PROJECT8.png";
// import logo from "./Asset 5@4x.png";

function Otherprojects() {
  const otherProjects = [
    {
      id: 1,
      image: project5,
      heading: "Last Memory",
      paragraph:
        "This project is about making memories of people who are now grown old to make their memories alive",
      githubLink: "https://github.com/Zubair375375/Project01",
    },
    {
      id: 2,
      image: project3,
      heading: "Moviedesk (full-stack)",
      paragraph:
        "Developed a MovieDesk project, utilizing the Node js, mySQL, Express js and React js to ensure efficient data storage & user-experience.",
      githubLink: "https://github.com/Zubair375375/Movie-Desk",
    },
    // {
    //   id: 3,
    //   image: project7,
    //   heading: "Text App",
    //   paragraph:
    //     " This is a small project which is working on texts, to apply different functions on the specific texts",
    //   githubLink: "https://github.com/Zubair375375/Project-for-Traveling",
    // },

    {
      id: 4,
      image: project4,
      heading: "TO-DO",
      paragraph:
        " Todo app is about to make a list of the tasks which is gonna be done in the required time or day using React",
      githubLink:
        "https://github.com/Zubair375375/todoReact/tree/main/todoreact",
    },
    {
      id: 5,
      image: project1,
      heading: "Polyp Segmentation using deep learning",
      paragraph:
        "This project is about finding the colorectal cancer inside large intestine of human body and detect the abnormal growth",
      githubLink: "https://github.com/Zubair375375/Project-for-Traveling",
    },
    {
      id: 6,
      image: project2,
      heading: "Memories (MERN)",
      paragraph:
        "Developed a full-stack project for past Memories with Node js, MongoDB, Express js and React js making it more realistic and user-experience level enhanced.",
      githubLink: "https://github.com/Zubair375375/memories-project",
    },
    {
      id: 7,
      image: project6,
      heading: "Travel App",
      paragraph:
        " The travelling app is about to make a list of things which are necessary in our luggage for travelling. ",
      githubLink: "https://github.com/Zubair375375/Project-for-Traveling",
    },

    {
      id: 8,
      image: project8,
      heading: "React counter",
      paragraph:
        " This app was my first accurate app which i have developed and felt familiar with React",
      githubLink: "https://github.com/Zubair375375/CounterRemastered",
    },
  ];
  return (
    <>
      <div className="container px-4 py-5" id="featuredd">
        <h2
          className="pb-2 border-bottom"
          style={{ color: "rgb(0, 52, 107)", fontWeight: "bold" }}
        >
          Other Noteworthy Projects
        </h2>
        <div className="row flex-row flex-nowrap g-3 overflow-auto py-4 feature-container">
          {otherProjects.map((otherProject) => (
            <div
              key={otherProject.id}
              className="feature col spcBt"
              style={{
                margin: "0 1.6rem",
                // backgroundColor: "red",
                borderRadius: "0.6rem",
              }}
            >
              <div className="feature-icon d-inline-flex align-items-center bg-gradient fs-2 mb-3">
                <img
                  src={otherProject.image}
                  alt=""
                  style={{
                    maxWidth: "17rem",
                    borderRadius: "0.6rem 0.6rem 0 0",
                  }}
                />
              </div>
              <h3
                className="fs-5 text-body-emphasis"
                style={{ maxWidth: "20rem" }}
              >
                {otherProject.heading}
              </h3>
              <p style={{ maxWidth: "20rem" }}>{otherProject.paragraph}</p>
              <a
                href={otherProject.githubLink}
                target="blank"
                className="icon-link"
              >
                View code
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

export default Otherprojects;
