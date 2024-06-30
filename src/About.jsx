import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import myPhoto from "./myDp2.png";

function About() {
  return (
    <>
      <section className="about-us mtt" id="about-section-access">
        <div className="container">
          <div className="row align-items-center correctThis">
            <div
              className="col-md-6 mb-4 mb-md-0 position-relative"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={myPhoto}
                className="img-fluid"
                alt="My Profile Picture"
                style={{ width: "25rem", borderRadius: "0.6rem" }}
              />
              <div
                className="overlay"
                style={{ width: "25rem", borderRadius: "0.6rem" }}
              ></div>
            </div>

            <div className="col-md-6">
              <div className="">
                <h2 className="aboutText">About</h2>
                <h5>Software Engineer</h5>
                <p className="fitThisText">
                  Hey! My name is Zubair and I'm a web developer with a passion
                  for website development. I'm currently a graduate student at
                  CECOS University pursuing a degree in computer science. I
                  aspire toward a career that will allow me to channel my
                  creativity through crafting beautiful software and engaging
                  experiences.
                </p>
                <p className="fitThisText">
                  Hey! My name is Zubair and I'm a web developer with a passion
                  for website development. I'm currently a graduate student at
                  CECOS University pursuing a degree in computer science. I
                  aspire toward a career that will allow me to channel my
                  creativity through crafting beautiful software and engaging
                  experiences.
                </p>
                {/* <div className="data" style={{ marginBottom: "2rem" }}>
                  <a
                    href="#"
                    className="btn"
                    style={{
                      backgroundColor: "rgb(0, 65, 134)",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Hire Me
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
